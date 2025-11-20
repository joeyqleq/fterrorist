import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GlobalLoader } from "@/components/ui/global-loader";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Space_Mono } from "next/font/google";

// Load Space Mono locally

export const metadata: Metadata = {
  metadataBase: new URL("https://terrorist.me"),
  title: "FREEBIE TERRORIST - Digital Anarchist Platform",
  description:
    "Freebie Terrorist is a living index of verified student freebies and edu-ready perks built by digital anarchists, for anyone who hates paywalls.",
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
    images: [
      {
        url: "https://terrorist.me/terrorist_logo.png",
        width: 1200,
        height: 630,
        alt: "Freebie Terrorist ASCII emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freebieterrorist",
    creator: "@freebieterrorist",
    title: "FREEBIE TERRORIST - Digital Anarchist Platform",
    description: "Breaking educational barriers through digital rebellion",
    images: ["https://terrorist.me/terrorist_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  
  const matomoScript = `
    var _paq = window._paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    ${process.env.NODE_ENV === 'production' ? `
    _paq.push(["setCookieDomain", "*.terrorist.me"]);
    _paq.push(["setDomains", ["*.terrorist.me","*.www.terrorist.me"]]);
    _paq.push(["enableCrossDomainLinking"]);
    ` : ''}
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="//matomo.p5n.lol/";
      _paq.push(['setTrackerUrl', u+'matomo.php']);
      _paq.push(['setSiteId', '2']);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning data-oid="i-1x:g8">
      <head data-oid="p5n7riu">
        <meta
          name="apple-mobile-web-app-title"
          content="FTERRORIST"
          data-oid="73hfgl8"
        />

        <Script
          id="matomo"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: matomoScript }}
        />

        <Script
          id="google-analytics-src"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-52TVB7993H"
        />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-52TVB7993H');
            `,
          }}
        />

        <Script
          id="tianji"
          strategy="afterInteractive"
          src="https://tianji.p5n.lol/tracker.js"
          data-website-id="cmhgrm18c0001k053lht419w0"
        />

        <Script
          id="plerdy"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
    var _protocol="https:"==document.location.protocol?"https://":"http://";
    _site_hash_code = "dd6c23661e4aac13321ed353243d32fc",_suid=69118, plerdyScript=document.createElement("script");
    plerdyScript.setAttribute("defer",""),plerdyScript.dataset.plerdymainscript="plerdymainscript",
    plerdyScript.src="https://a.plerdy.com/public/js/click/main.js?v="+Math.random();
    var plerdymainscript=document.querySelector("[data-plerdymainscript='plerdymainscript']");
    plerdymainscript&&plerdymainscript.parentNode.removeChild(plerdymainscript);
    try{document.head.appendChild(plerdyScript)}catch(t){console.log(t,"unable add script tag")}
          `,
          }}
        />
        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
          data-oid="71pf_zm"
        />
        <Script
          id="brevo-conversations"
          strategy="afterInteractive"
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
        <Script
          id="brevo-sdk"
          strategy="afterInteractive"
          src="https://cdn.brevo.com/js/sdk-loader.js"
          data-oid="6y_jdri"
        />
        <Script
          id="brevo-init"
          strategy="afterInteractive"
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
      <body className={spaceMono.className} data-oid="g6a92cy">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          data-oid="rv8f274"
        >
          <GlobalLoader data-oid="sin3pd8" />
          {children}
          <SpeedInsights data-oid="xfy38ys" />
          <Analytics data-oid=":.gw-kw" />
        </ThemeProvider>
      </body>
    </html>
  );
}
