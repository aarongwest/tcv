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
    logo: "/images/ehs-logo.png",
    getFilter: (isDark: boolean) => (isDark ? "invert(1)" : "none"),
    // SVG coordinate for line endpoint and HTML centering
    svgX: 117,
    lineDelay: 0,
    nodeStaggerDelay: 0,
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
    logo: "/images/west-logo.png",
    getFilter: (_isDark: boolean) => "invert(1)",
    svgX: 350,
    lineDelay: 150,
    nodeStaggerDelay: 150,
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
    logo: "/images/zygur-logo.png",
    // brightness(0) collapses all channels to black, invert(1) flips to solid white
    getFilter: (isDark: boolean) => (isDark ? "brightness(0) invert(1)" : "invert(1)"),
    svgX: 583,
    lineDelay: 300,
    nodeStaggerDelay: 300,
  },
]

// Virtual coordinate space matching the SVG viewBox (700 × 480).
// HTML nodes are absolutely positioned using these as percentages of the container.
//
// Aaron node:    center-x=350, top=20, w=210, h=120  → bottom y=140
// Company nodes: center-x=svgX, top=330, w=170, h=130
// Lines:         (350, 140) → (svgX, 330)
const VW = 700
const VH = 480
const AARON_TOP = 20
const AARON_W = 210
const AARON_H = 120
const CO_TOP = 330
const CO_W = 170
const CO_H = 130
const LINE_Y1 = AARON_TOP + AARON_H   // 140
const LINE_Y2 = CO_TOP                 // 330

function pct(v: number, total: number) {
  return `${(v / total) * 100}%`
}

function lineLen(svgX: number) {
  const dx = 350 - svgX
  const dy = LINE_Y2 - LINE_Y1
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
    const t2 = setTimeout(() => setNodesVisible(true), 1200)
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

        {/* Diagram — horizontal scroll on narrow viewports */}
        <div className="overflow-x-auto">
          {/*
            Container maintains a 700:480 aspect ratio so SVG coordinates
            map 1:1 to percentage positions of HTML nodes.
            min-width keeps nodes legible on small screens.
          */}
          <div
            className="relative"
            style={{ aspectRatio: `${VW} / ${VH}`, minWidth: "560px" }}
          >
            {/* SVG layer — animated lines only, no foreignObject */}
            <svg
              viewBox={`0 0 ${VW} ${VH}`}
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="xMidYMid meet"
            >
              {companies.map((company) => {
                const len = lineLen(company.svgX)
                return (
                  <line
                    key={company.id}
                    x1="350"
                    y1={LINE_Y1}
                    x2={company.svgX}
                    y2={LINE_Y2}
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                    style={{
                      strokeDasharray: len,
                      strokeDashoffset: linesDrawn ? 0 : len,
                      transition: `stroke-dashoffset 0.7s ease-in-out ${company.lineDelay}ms`,
                    }}
                  />
                )
              })}
            </svg>

            {/* Aaron node — centered at (50%, 4.17%), size 30% × 25% */}
            <div
              className="absolute"
              style={{
                left: "50%",
                top: pct(AARON_TOP, VH),
                transform: "translateX(-50%)",
                width: pct(AARON_W, VW),
                height: pct(AARON_H, VH),
              }}
            >
              <div className="w-full h-full border border-border rounded-lg bg-background flex flex-col items-center justify-center gap-2 p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/aaron-west-logo.png"
                  alt="Aaron West"
                  style={{
                    height: "36px",
                    width: "auto",
                    maxWidth: "80%",
                    objectFit: "contain",
                    filter: isDark ? "invert(1)" : "none",
                    transition: "filter 0.3s",
                  }}
                />
                <div className="text-center">
                  <div className="text-xs font-medium text-foreground">Aaron West</div>
                  <div className="text-xs text-muted-foreground">Owner</div>
                </div>
              </div>
            </div>

            {/* Company nodes — centered at (svgX/VW, CO_TOP/VH), size 24.3% × 27.1% */}
            {companies.map((company) => (
              <div
                key={company.id}
                className="absolute"
                style={{
                  left: pct(company.svgX, VW),
                  top: pct(CO_TOP, VH),
                  transform: "translateX(-50%)",
                  width: pct(CO_W, VW),
                  height: pct(CO_H, VH),
                  opacity: nodesVisible ? 1 : 0,
                  transition: `opacity 0.5s ease-in-out ${company.nodeStaggerDelay}ms`,
                }}
              >
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActiveCompany(company.id)}
                  onMouseLeave={() => setActiveCompany(null)}
                  className={[
                    "flex flex-col justify-between w-full h-full border rounded-lg p-3 bg-background transition-colors duration-300 no-underline",
                    company.status === "inactive" ? "opacity-50" : "",
                    activeCompany === company.id
                      ? "border-muted-foreground/50"
                      : "border-border hover:border-muted-foreground/50",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={company.logo}
                    alt={company.name}
                    style={{
                      height: "28px",
                      width: "auto",
                      maxWidth: "100%",
                      objectFit: "contain",
                      objectPosition: "left center",
                      filter: company.getFilter(isDark),
                      transition: "filter 0.3s",
                    }}
                  />
                  <div>
                    <div className="text-xs font-medium text-foreground leading-tight">{company.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 leading-tight">{company.domain}</div>
                    {company.status === "inactive" && (
                      <div className="text-[10px] text-muted-foreground/50 mt-1 font-mono">SHELVED</div>
                    )}
                  </div>
                </a>
              </div>
            ))}

            {/* Tooltip */}
            {activeData && (
              <div
                className="absolute z-10 pointer-events-none"
                style={{
                  left: pct(activeData.svgX, VW),
                  top: pct(CO_TOP, VH),
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
