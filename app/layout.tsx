import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GlobalLoader } from "@/components/ui/global-loader";
import { initToolbar } from "@21st-extension/toolbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Pointer } from "@/components/ui/pointer";

// Load Space Mono locally

export const metadata: Metadata = {
  title: "FREEBIE TERRORIST - Digital Anarchist Platform",
  description:
    "Breaking educational barriers through digital rebellion. Curated, up to date free shit for students. No discounts. Only freebie terrorism on this ship.",
  keywords: [
    "student discounts",
    "free software",
    "edu email",
    "educational tools",
    "digital anarchist",
  ],
  openGraph: {
    title: "FREEBIE TERRORIST - Digital Anarchist Platform",
    description: "Breaking educational barriers through digital rebellion",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-oid="i-1x:g8">
      <head data-oid="p5n7riu">
        <meta
          name="apple-mobile-web-app-title"
          content="FTERRORIST"
          data-oid="73hfgl8"
        />
        {/* Tianji analytics */}
       <script async defer src="https://tianji.p5n.lol/tracker.js" data-website-id="cmhgrm18c0001k053lht419w0"
        />
        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
          data-oid="71pf_zm"
        />
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
          data-oid="sqqw27r"
        />
        <script
          src="https://cdn.brevo.com/js/sdk-loader.js"
          async
          data-oid="6y_jdri"
        ></script>
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
          data-oid="hz.wkw:"
        />
      </head>
      <body className="" data-oid="g6a92cy">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          data-oid="rv8f274"
        >
          <Pointer />
          <GlobalLoader data-oid="sin3pd8" />
          {children}
          <SpeedInsights data-oid="xfy38ys" />
          <Analytics data-oid=":.gw-kw" />
        </ThemeProvider>
      </body>
    </html>
  );
}
