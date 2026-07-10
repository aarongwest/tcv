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
  title: "Aaron West — AI Developer",
  description: "AI developer and founder building compliance automation, AEO tooling, and field service software. 20+ years of EHS domain expertise applied to AI products.",
  keywords: ["AI developer", "AI developer Houston", "compliance automation", "EHS software", "safety AI", "AI founder"],
  openGraph: {
    title: "Aaron West — AI Developer",
    description: "AI developer and founder building compliance automation, AEO tooling, and field service software.",
    url: "https://aaronwest.me",
    type: "profile",
  },
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
        <Script src="https://zygur.com/z/46952cf7-c433-45e1-af2f-f9cf14c9ca81" strategy="afterInteractive" id="zygur-pixel" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Aaron West",
            "jobTitle": "AI Developer",
            "description": "AI developer and founder building compliance automation software, AEO tooling, and field service platforms. 20+ years of EHS expertise.",
            "url": "https://aaronwest.me",
            "sameAs": [
              "https://www.linkedin.com/in/aarongwest/",
              "https://github.com/aarongwest"
            ],
            "address": { "@type": "PostalAddress", "addressRegion": "TX", "addressCountry": "US" },
            "knowsAbout": ["AI development", "compliance automation", "EHS software", "safety AI", "full-stack development", "AEO"],
            "worksFor": [
              { "@type": "Organization", "name": "EHS, Inc.", "url": "https://ehs.inc" },
              { "@type": "Organization", "name": "Zygur Technologies Corp.", "url": "https://zygur.com" },
              { "@type": "Organization", "name": "West Industries Corp.", "url": "https://west.industries" }
            ]
          }) }}
        />
        {children}
      </body>
    </html>
  )
}