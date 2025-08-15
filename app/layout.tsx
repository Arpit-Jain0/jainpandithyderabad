import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Geist } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "पंडित जी - जैन धर्म सेवाएं | Hyderabad Jain Pandit Services",
  description:
    "हैदराबाद में अनुभवी जैन पंडित जी की पूजा और विधि सेवाएं | Experienced Jain Pandit in Hyderabad for Pooja and Vidhi ceremonies",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hi" className={`${manrope.variable} ${geist.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
