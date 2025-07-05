import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Freebie Terrorist - Breaking Educational Barriers",
  description:
    "Legitimate .edu accounts for students worldwide. Breaking barriers to premium software and services for those marginalized by economic and political exclusivity.",
  keywords: "edu account, student access, educational equality, free software, global south, legitimate accounts",
  authors: [{ name: "Freebie Terrorist" }],
  openGraph: {
    title: "Freebie Terrorist - Breaking Educational Barriers",
    description: "Legitimate .edu accounts for students worldwide. Fighting against educational exclusivity.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freebie Terrorist - Breaking Educational Barriers",
    description: "Legitimate .edu accounts for students worldwide. Fighting against educational exclusivity.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
    <script async defer src="https://tianji.motherfucking.fun/tracker.js" data-website-id="cmcqrgs1m00ujrwk7oc3t5gwz"></script>
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
