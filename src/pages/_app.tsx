import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import * as Fathom from "fathom-client";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import "@total-typescript/ts-reset";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { env } from "@/env.mjs";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load(env.NEXT_PUBLIC_FATHOM_SITE_ID, {
      includedDomains: ["aiexperiments.co", "openai-experiment.vercel.app"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  });

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <Analytics />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
