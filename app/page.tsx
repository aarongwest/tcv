"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <main className="w-full max-w-5xl">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {/* Left: Name, Role and Photo */}
          <div className="space-y-4">
            <div className="mb-4 flex justify-start">
              <Image
                src="/images/aaron-west.jpeg"
                alt="Aaron West"
                width={120}
                height={120}
                className="rounded-lg object-cover w-24 h-24"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight">Aaron West</h1>
              <div className="text-xs text-muted-foreground">AKA "Plan B"</div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for Consulting
              </div>
              <div>Utah - In Person, Worldwide - Virtual</div>
            </div>
          </div>

          {/* Center: Role and Focus */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="text-xs text-muted-foreground font-mono">ROLE</div>
              <div className="space-y-1">
                <div className="text-foreground font-medium text-sm">EHS / Safety Professional</div>
                <div className="text-xs text-muted-foreground">
                  20 years experience | Environmental, Health & Safety
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs text-muted-foreground font-mono">FOCUS AREAS</div>
              <div className="flex flex-wrap gap-2">
                {["Safety Observations", "Mitigation", "Big Data", "Performance", "KPIs"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact */}
          <div className="space-y-3">
            <div className="text-xs text-muted-foreground font-mono">CONNECT</div>
            <div className="space-y-2">
              <Link
                href="https://www.linkedin.com/in/aarongwest/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors duration-300 text-sm"
              >
                <span>LinkedIn</span>
                <svg
                  className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="https://github.com/aarongwest"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors duration-300 text-sm"
              >
                <span>GitHub</span>
                <svg
                  className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@safetyobservations"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors duration-300 text-sm"
              >
                <span>YouTube</span>
                <svg
                  className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {/* Works */}
          <div className="space-y-3">
            <div className="text-xs text-muted-foreground font-mono">WORKS</div>
            <div className="space-y-2">
              <Link
                href="https://sog.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <div className="text-sm font-medium text-foreground">SOG</div>
                    <div className="text-xs text-muted-foreground/70">sog.dev</div>
                  </div>
                  <svg
                    className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 ml-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6v12h12v-6m0-4l4.586-4.586a2 2 0 012.828 0l-2.828 2.828H18v6h-6v-6z"
                    />
                  </svg>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Safety Observations Group Development</div>
              </Link>
              <Link
                href="https://ehs.inc"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <div className="text-sm font-medium text-foreground">EHS</div>
                    <div className="text-xs text-muted-foreground/70">ehs.inc</div>
                  </div>
                  <svg
                    className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 ml-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6v12h12v-6m0-4l4.586-4.586a2 2 0 012.828 0l-2.828 2.828H18v6h-6v-6z"
                    />
                  </svg>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Environmental Health & Safety Solutions</div>
              </Link>
                <Link
                href="https://gerty.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <div className="text-sm font-medium text-foreground">Gerty</div>
                    <div className="text-xs text-muted-foreground/70">gerty.ai</div>
                  </div>
                  <svg
                    className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 ml-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6v12h12v-6m0-4l4.586-4.586a2 2 0 012.828 0l-2.828 2.828H18v6h-6v-6z"
                    />
                  </svg>
                </div>
                <div className="text-xs text-muted-foreground mt-1">EHS/Safety AI Assistant</div>
              </Link>
              <Link
                href="https://oshify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <div className="text-sm font-medium text-foreground">OSHIFY®</div>
                    <div className="text-xs text-muted-foreground/70">oshify.com</div>
                  </div>
                  <svg
                    className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 ml-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6v12h12v-6m0-4l4.586-4.586a2 2 0 012.828 0l-2.828 2.828H18v6h-6v-6z"
                    />
                  </svg>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Occupational Safety & Health Platform</div>
              </Link>
            </div>
          </div>

          {/* About */}
          <div className="space-y-3">
            <div className="text-xs text-muted-foreground font-mono">EXPERTISE</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Environmental Health & Safety professional with expertise in workplace safety compliance, risk management,
              and operational excellence. Lover of big data and high performance.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-border">
          <div className="text-xs text-muted-foreground">© Aaron West. All rights reserved.</div>
          <button
            onClick={toggleTheme}
            className="group p-2 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg
                className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </main>
    </div>
  )
}
