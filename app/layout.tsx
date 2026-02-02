import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Aaron West - EHS / Safety Professional",
  description: "EHS and Safety Professional from Utah with expertise in workplace safety and compliance.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{  
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}> 
      <body className="font-sans antialiased">
        <Script src="//js-na1.hs-scripts.com/46520416.js" strategy="afterInteractive" id="hs-script-loader" />
        {children}
      </body>
    </html>
  )
}