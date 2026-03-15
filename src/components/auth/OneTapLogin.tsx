'use client';

import { useEffect, useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export function OneTapLogin() {
  const [hasPrompted, setHasPrompted] = useState(false);
  const router = useRouter();

  // Use Better Auth's session hook
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    // Only prompt if:
    // 1. We've finished checking session state
    // 2. The user is NOT logged in
    // 3. We haven't already prompted them in this session lifetime
    if (!isPending && !session?.user && !hasPrompted) {
      // Only trigger One Tap if the client ID is configured in the environment variables
      const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
      if (!clientId) return;

      // Delay prompt slightly so it feels natural and doesn't block critical rendering
      const timer = setTimeout(() => {
        authClient
          .oneTap({
            autoSelect: false,
            cancelOnTapOutside: true,
          })
          .then((res) => {
            console.log('✅ [OneTapLogin] Success Response:', res);
            // Soft-refresh the server components and UI state without full page reload
            router.refresh();
          })
          .catch((err) => {
            // oneTap usually throws an error if user canceled or if cookies/Opt-Out block it
            console.debug('One Tap canceled or blocked:', err);
          });

        setHasPrompted(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [session, isPending, hasPrompted]);

  return null; // This is a logic-only component
}
