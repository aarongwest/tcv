import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Aaron West — Founder, Kiowa Systems Corp.",
  description: "20+ years in EHS and compliance. Founder of Kiowa Systems Corp., building the platform and running the programs that keep regulated companies audit-ready.",
  keywords: ["EHS compliance", "compliance automation", "safety consulting", "Kiowa Systems", "GRC"],
  openGraph: {
    title: "Aaron West — Founder, Kiowa Systems Corp.",
    description: "20+ years in EHS and compliance. Founder of Kiowa Systems Corp., building the platform and running the programs that keep regulated companies audit-ready.",
    url: "https://aaronwe.st",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Aaron West",
            "jobTitle": "Founder, Kiowa Systems Corp.",
            "description": "20+ years in EHS and compliance. Founder of Kiowa Systems Corp., building the platform and running the programs that keep regulated companies audit-ready.",
            "url": "https://aaronwe.st",
            "sameAs": [
              "https://www.linkedin.com/in/aarongwest/",
              "https://github.com/aarongwest"
            ],
            "address": { "@type": "PostalAddress", "addressRegion": "TX", "addressCountry": "US" },
            "knowsAbout": ["compliance automation", "EHS software", "safety AI", "full-stack development"],
            "worksFor": [
              { "@type": "Organization", "name": "Kiowa Systems Corp.", "url": "https://kiowa.sh" }
            ]
          }) }}
        />
        {children}
      </body>
    </html>
  )
}