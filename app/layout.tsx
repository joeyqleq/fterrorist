import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import LogoInitializer from "@/components/LogoInitializer"

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400","700"] })

export const metadata: Metadata = {
  title: "FTERRORIST - Digital Anarchist Platform",
  description: "Breaking educational barriers through digital rebellion. Free .edu accounts, premium software, and student tools for everyone.",
  keywords: ["student discounts", "free software", "edu email", "educational tools", "digital anarchist"],
  openGraph: {
    title: "FTERRORIST - Digital Anarchist Platform",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitcount+Prop+Single:wght@100;200;300;400;500&family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Space+Mono:ital,wght@1,400&display=swap"
          rel="stylesheet"
        />
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
        </ThemeProvider>
      </body>
    </html>
  )
}