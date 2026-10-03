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
  title: "Aaron West — Industrial Safety & Critical Infrastructure Operations",
  description: "20+ years in EHS, industrial operations, and critical infrastructure — safety and compliance for data centers, manufacturing, and regulated facilities.",
  keywords: ["EHS", "industrial safety", "critical infrastructure", "data center operations", "safety consulting", "GRC"],
  openGraph: {
    title: "Aaron West — Industrial Safety & Critical Infrastructure Operations",
    description: "20+ years in EHS, industrial operations, and critical infrastructure — safety and compliance for data centers, manufacturing, and regulated facilities.",
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
            "jobTitle": "Industrial Safety & Critical Infrastructure Operations",
            "description": "20+ years in EHS, industrial operations, and critical infrastructure — safety and compliance for data centers, manufacturing, and regulated facilities.",
            "url": "https://aaronwe.st",
            "sameAs": [
              "https://www.linkedin.com/in/aarongwest/",
              "https://github.com/aarongwest"
            ],
            "address": { "@type": "PostalAddress", "addressRegion": "TX", "addressCountry": "US" },
            "knowsAbout": ["EHS", "industrial safety", "critical infrastructure operations", "regulatory compliance", "full-stack development"]
          }) }}
        />
        {children}
      </body>
    </html>
  )
}