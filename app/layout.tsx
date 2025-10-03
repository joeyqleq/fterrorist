import type { Metadata } from "next"
import localFont from "next/font/local"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GlobalLoader } from "@/components/ui/global-loader"
import { initToolbar } from '@21st-extension/toolbar';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next"

// Load Space Mono locally
const spaceMono = localFont({
  src: [
    { path: "./fonts/SpaceMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/SpaceMono-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/SpaceMono-Italic.ttf", weight: "400", style: "italic" },
  ],
  display: "swap",
})

export const metadata: Metadata = {
  title: "FREEBIE TERRORIST - Digital Anarchist Platform",
  description: "Breaking educational barriers through digital rebellion. Curated, up to date free shit for students. No discounts. Only freebie terrorism on this ship.",
  keywords: ["student discounts", "free software", "edu email", "educational tools", "digital anarchist"],
  openGraph: {
    title: "FREEBIE TERRORIST - Digital Anarchist Platform",
    description: "Breaking educational barriers through digital rebellion",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="FTERRORIST" />
        {/* Matomo Tag Manager */}
        <Script
          id="matomo-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            var _mtm = window._mtm = window._mtm || [];
            _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
            (function() {
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src='https://matomo.motherfucking.fun/js/container_PpeT58PO.js'; s.parentNode.insertBefore(g,s);
            })();
          `,
          }}
        />
        {/* Font Awesome */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
        {/* Brevo Conversations */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, w, c) {
                  w.BrevoConversationsID = '6640d1d34321cd379032bedd';
                  w[c] = w[c] || function() {
                      (w[c].q = w[c].q || []).push(arguments);
                  };
                  var s = d.createElement('script');
                  s.async = true;
                  s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
                  if (d.head) d.head.appendChild(s);
              })(document, window, 'BrevoConversations');
            `,
          }}
        />
        <script src="https://cdn.brevo.com/js/sdk-loader.js" async></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.Brevo = window.Brevo || [];
              Brevo.push([
                  "init",
                  { client_key: "21hq8ng0xbjwwoggwi7e12qw" }
              ]);
            `,
          }}
        />
      </head>
      <body className={spaceMono.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <GlobalLoader />
          {children}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}