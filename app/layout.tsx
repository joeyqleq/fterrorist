import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import LogoInitializer from "@/components/LogoInitializer"
import { initToolbar } from '@21st-extension/toolbar';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next"

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400","700"] })

export const metadata: Metadata = {
  title: "FREEBIE TERRORIST - Digital Anarchist Platform",
  description: "Breaking educational barriers through digital rebellion. Free .edu accounts, premium software, and student tools for everyone.",
  keywords: ["student discounts", "free software", "edu email", "educational tools", "digital anarchist"],
  openGraph: {
    title: "FREEBIE TERRORIST - Digital Anarchist Platform",
    description: "Breaking educational barriers through digital rebellion",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <!-- Matomo Tag Manager -->
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitcount+Prop+Single:wght@100;200;300;400;500&family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Space+Mono:ital,wght@1,400&display=swap"
          rel="stylesheet"
        />
        <script async defer src="https://tianji.motherfucking.fun/tracker.js" data-website-id="cmcqrgs1m00ujrwk7oc3t5gwz"></script>
      </head>
      <body className={spaceMono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LogoInitializer />
          {children}
          <SpeedInsights />
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  )
}