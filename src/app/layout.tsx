import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Agent OpenClaw Services | AI-Powered Agent Solutions",
    template: "%s | AgentOpenClaw",
  },
  description:
    "AgentOpenClaw provides custom AI agent services built on OpenClaw — including SEO agents, content agents, research agents and automation. Join the waitlist today.",
  keywords: [
    "agent openclaw",
    "openclaw agent services",
    "AI agent",
    "AI agent services",
    "AI automation",
    "SEO agent",
    "content agent",
    "research agent",
    "custom AI agent",
    "openclaw",
    "AI business automation",
    "AI-powered agents",
  ],
  authors: [{ name: "AgentOpenClaw" }],
  creator: "AgentOpenClaw",
  publisher: "AgentOpenClaw",
  metadataBase: new URL("https://agentopenclaw.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Agent OpenClaw Services | AI-Powered Agent Solutions",
    description:
      "AgentOpenClaw provides custom AI agent services built on OpenClaw — including SEO agents, content agents, research agents and automation. Join the waitlist today.",
    url: "https://agentopenclaw.app",
    siteName: "AgentOpenClaw",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AgentOpenClaw - AI-Powered Agent Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent OpenClaw Services | AI-Powered Agent Solutions",
    description:
      "Custom AI agent services built on OpenClaw — SEO, content, research, and automation agents.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WVBW7RTQ9M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WVBW7RTQ9M');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
