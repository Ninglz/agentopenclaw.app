import { EmailMessage } from "cloudflare:email";

const sender = "waitlist@agentopenclaw.app";
const recipient = "ninglz2073@gmail.com";
const maxBodyBytes = 1024;

function reply(status, headers = {}) {
  return Response.json({ ok: status === 200 }, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

async function readEmail(request) {
  const reader = request.body?.getReader();
  if (!reader) return null;

  const decoder = new TextDecoder("utf-8", { fatal: true });
  let bytes = 0;
  let body = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > maxBodyBytes) {
        await reader.cancel();
        return null;
      }
      body += decoder.decode(value, { stream: true });
    }
    const payload = JSON.parse(body + decoder.decode());
    const email = typeof payload?.email === "string" ? payload.email.trim() : "";
    return email.length <= 254 && /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/i.test(email)
      ? email
      : null;
  } catch {
    return null;
  } finally {
    reader.releaseLock();
  }
}

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/api/waitlist") return new Response(null, { status: 404 });
    if (request.method !== "POST") return reply(405, { Allow: "POST" });
    if (request.headers.get("Origin") !== url.origin) return reply(403);
    if (request.headers.get("Content-Type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
      return reply(415);
    }

    const email = await readEmail(request);
    if (!email) return reply(400);

    const clientIP = request.headers.get("CF-Connecting-IP") || "unknown";
    const clientLimit = await env.WAITLIST_PER_IP.limit({ key: clientIP });
    if (!clientLimit.success) return reply(429, { "Retry-After": "60" });
    const totalLimit = await env.WAITLIST_TOTAL.limit({ key: "waitlist" });
    if (!totalLimit.success) return reply(429, { "Retry-After": "60" });

    const raw = [
      `From: AgentOpenClaw Waitlist <${sender}>`,
      `To: ${recipient}`,
      "Subject: New Waitlist Signup - AgentOpenClaw",
      `Date: ${new Date().toUTCString().replace("GMT", "+0000")}`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=utf-8",
      "",
      `Email: ${email}`,
      "",
    ].join("\r\n");

    try {
      await env.WAITLIST_EMAIL.send(new EmailMessage(sender, recipient, raw));
      return reply(200);
    } catch {
      console.error("Waitlist email delivery request failed");
      return reply(503);
    }
  },
};

export default worker;
