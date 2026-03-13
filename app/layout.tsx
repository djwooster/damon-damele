import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import ScrollRestorer from "@/components/ScrollRestorer"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Damon Damele — Senior Director of Product",
  description:
    "Damon Damele is a Senior Director of Product Management who turns ambiguous problems into clear priorities, aligned teams, and products that ship.",
  openGraph: {
    title: "Damon Damele — Senior Director of Product",
    description:
      "Damon Damele is a Senior Director of Product Management who turns ambiguous problems into clear priorities, aligned teams, and products that ship.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans antialiased bg-white text-black`}>
        <Navigation />
        <ScrollRestorer />
        {children}
      </body>
    </html>
  )
}
