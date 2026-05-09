"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const companies = [
  {
    id: "ehs",
    name: "EHS, Inc.",
    tagline: "EHS Compliance Automation",
    description:
      "Portal-first platform for managing safety programs with Gerty AI. Training, inspections, reminders, and reports — fully automated. Set it once, runs on autopilot.",
    url: "https://ehs.inc",
    domain: "ehs.inc",
    status: "active" as const,
    svgX: 117,
    lineDelay: 0,
    nodeDelay: 800,
  },
  {
    id: "west",
    name: "West Industries Corp.",
    tagline: "Field Services, Greater Houston",
    description:
      "Land clearing, site construction, and welding repair across Greater Houston. Three service brands: West Land Clearing, West Construction, and West Weld.",
    url: "https://west.industries",
    domain: "west.industries",
    status: "active" as const,
    svgX: 350,
    lineDelay: 150,
    nodeDelay: 1000,
  },
  {
    id: "zygur",
    name: "Zygur Technologies Corp.",
    tagline: "Compliance Tools for Regulated Devs",
    description:
      "Shelved technology company. Legacy compliance tooling work that informed the direction of EHS, Inc. and Gerty AI.",
    url: "https://zygur.com",
    domain: "zygur.com",
    status: "inactive" as const,
    svgX: 583,
    lineDelay: 300,
    nodeDelay: 1200,
  },
]

// SVG viewBox: 0 0 700 420
// Aaron node: x=260, y=30, w=180, h=80 — center (350,70), bottom y=110
// Company nodes: y=300, h=90, w=160 — center x = svgX
// Lines: (350,110) → (svgX, 300)
const LINE_DASHARRAY = 320

function getLineLength(svgX: number) {
  const dx = 350 - svgX
  const dy = 300 - 110
  return Math.sqrt(dx * dx + dy * dy)
}

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)
  const [activeCompany, setActiveCompany] = useState<string | null>(null)
  const [linesDrawn, setLinesDrawn] = useState(false)
  const [nodesVisible, setNodesVisible] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const t1 = setTimeout(() => setLinesDrawn(true), 400)
    const t2 = setTimeout(() => setNodesVisible(true), 1300)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  const activeData = companies.find((c) => c.id === activeCompany) ?? null

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <main className="w-full max-w-4xl">
        {/* Header nav */}
        <div className="flex items-center justify-between mb-12">
          <Link
            href="/"
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
          >
            <svg
              className="w-3 h-3 transform group-hover:-translate-x-0.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Aaron West</span>
          </Link>
          <div className="text-xs text-muted-foreground font-mono">PORTFOLIO</div>
        </div>

        {/* Diagram */}
        <div className="relative w-full">
          <svg
            viewBox="0 0 700 420"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
            style={{ overflow: "visible" }}
          >
            {/* Animated connection lines */}
            {companies.map((company) => {
              const len = getLineLength(company.svgX)
              return (
                <line
                  key={company.id}
                  x1="350"
                  y1="110"
                  x2={company.svgX}
                  y2="300"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  style={{
                    strokeDasharray: LINE_DASHARRAY,
                    strokeDashoffset: linesDrawn ? 0 : len,
                    transition: `stroke-dashoffset 0.7s ease-in-out ${company.lineDelay}ms`,
                  }}
                />
              )
            })}

            {/* Aaron node */}
            <foreignObject x="260" y="30" width="180" height="80">
              <div className="w-full h-full border border-border rounded-lg p-3 bg-background flex flex-col items-center justify-center">
                <div className="text-sm font-medium text-foreground">Aaron West</div>
                <div className="text-xs text-muted-foreground mt-0.5">Owner</div>
              </div>
            </foreignObject>

            {/* Company nodes */}
            {companies.map((company) => (
              <foreignObject
                key={company.id}
                x={company.svgX - 80}
                y="300"
                width="160"
                height="90"
                style={{
                  opacity: nodesVisible ? 1 : 0,
                  transition: `opacity 0.5s ease-in-out ${company.nodeDelay - 1300}ms`,
                }}
              >
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActiveCompany(company.id)}
                  onMouseLeave={() => setActiveCompany(null)}
                  className={[
                    "block w-full h-full border rounded-lg p-3 bg-background transition-all duration-300 cursor-pointer no-underline",
                    company.status === "inactive" ? "opacity-50" : "",
                    activeCompany === company.id
                      ? "border-muted-foreground/50"
                      : "border-border hover:border-muted-foreground/50",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className="text-xs font-medium text-foreground leading-tight">{company.name}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">{company.domain}</div>
                  {company.status === "inactive" && (
                    <div className="text-xs text-muted-foreground/50 mt-1 font-mono text-[10px]">SHELVED</div>
                  )}
                </a>
              </foreignObject>
            ))}
          </svg>

          {/* Tooltip */}
          {activeData && (
            <div
              className="absolute z-10 pointer-events-none"
              style={{
                left: `${(activeData.svgX / 700) * 100}%`,
                top: `${(300 / 420) * 100}%`,
                transform: "translate(-50%, calc(-100% - 12px))",
              }}
            >
              <div className="bg-background border border-border rounded-lg p-3 shadow-sm w-52">
                <div className="text-xs font-medium text-foreground mb-1">{activeData.name}</div>
                <div className="text-xs text-muted-foreground font-mono mb-2">{activeData.tagline}</div>
                <div className="text-xs text-muted-foreground/80 leading-relaxed">{activeData.description}</div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-border mt-8">
          <div className="text-xs text-muted-foreground">©Aaron West | ARR ;/</div>
          <button
            onClick={() => setIsDark(!isDark)}
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
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm10.657 0l-.707.707a1 1 0 00-1.414-1.414l.707-.707a1 1 0 011.414 0zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
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
