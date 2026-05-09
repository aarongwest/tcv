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
    logoDark: "/images/ehs-logo.png",
    logoLight: "/images/ehs-logo.png",
    invertOnDark: true,
    coCX: 200,
    ai: "Gerty AI",
    aiDescription: "Automates EHS compliance programs — training schedules, inspection tracking, incident reporting, and regulatory reminders. Runs autonomously so clients stay compliant without manual effort.",
    people: ["Aaron - Chairman", "Mary - Accounting", "Khristyn - Operations", "Isaac - Sales", "Bambi - Marketing"],
  },
  {
    id: "west",
    name: "West Industries Corp.",
    tagline: "Field Services, Greater Houston",
    description:
      "Land clearing, site construction, and welding repair across Greater Houston. Three service brands: West Land Clearing, West Construction, and West Weld.",
    url: "https://west.industries",
    domain: "west.industries",
    logoDark: "/images/west-logo.png",
    logoLight: "/images/west-logo.png",
    invertOnDark: false,
    coCX: 650,
    ai: "Kasey AI",
    aiDescription: "Manages field operations for West Industries Corp. — job scheduling, crew dispatch, client follow-up, and service coordination across land clearing, construction, and welding.",
    people: ["Aaron - Operations", "Mary - Accounting", "Zed - Owner", "Scott - Sales", "Kathy - Dispatch", "Greg - Support"],
  },
  {
    id: "zygur",
    name: "Zygur Technologies Corp.",
    tagline: "Technology Research",
    description:
      "Technology research company focused on AI automation and advanced manufacturing.",
    url: "https://zygur.com",
    domain: "zygur.com",
    logoDark: "/images/zygur-logo.png",
    logoLight: "/images/zygur-logo.png",
    invertOnDark: false,
    coCX: 1050,
    ai: "Hayli AI",
    aiDescription: "Drives research and development at Zygur — tracking breakthroughs in AI automation and advanced manufacturing, synthesizing findings, and surfacing opportunities for new products.",
    people: ["Aaron - Board Member", "Mary - Accounting", "Hayli - Sales", "Zed - Owner", "Greg - Operations"],
  },
]

// Virtual coordinate space
// Aaron CX=650 aligns with West (650) → main vertical is a clean straight drop.
// AI nodes sit to the right of each company card at the same y-level.
const VW = 1300
const VH = 670

const AARON_CX = 650
const AARON_TOP = 20
const AARON_W = 220
const AARON_H = 115
const AARON_BOTTOM = AARON_TOP + AARON_H    // 135
const AARON_RIGHT = AARON_CX + AARON_W / 2  // 760

const COLLIS_TOP = 20
const COLLIS_W = 140
const COLLIS_H = 115
const COLLIS_LEFT = 780
const COLLIS_CX = COLLIS_LEFT + COLLIS_W / 2  // 850
const COLLIS_BOTTOM = COLLIS_TOP + COLLIS_H    // 135
const COLLIS_BUS_Y = 180
const CONNECTOR_Y = AARON_TOP + AARON_H / 2    // 77.5

const BUS_Y = 215
const CO_TOP_NODE = BUS_Y + 20               // 235
const CO_W = 170
const CO_H = 155
const CO_BOTTOM = CO_TOP_NODE + CO_H         // 390

// AI nodes — to the right of each company card, same y-level
const AI_W = 110
const AI_H = 115
const AI_TOP = CO_TOP_NODE
const AI_MID_Y = AI_TOP + AI_H / 2           // 292.5
const AI_GAP = 20

const PERSON_SECTION_TOP = CO_BOTTOM + 20    // 385
const PERSON_W = 140
const PERSON_H = 32
const PERSON_ROW_STEP = PERSON_H + 10        // 42

// AI node left edges and lengths
const AI_POSITIONS = companies.map((c) => ({
  id: c.id,
  left: c.coCX + CO_W / 2 + AI_GAP,
  cX: c.coCX + CO_W / 2 + AI_GAP + AI_W / 2,
  len: AI_GAP,
}))

const AARON_VERTICAL_LEN = CO_TOP_NODE - AARON_BOTTOM             // 120
const BUS_LEFT_LEN = AARON_CX - companies[0].coCX                 // 450
const BUS_RIGHT_LEN = companies[2].coCX - AARON_CX                // 400
const SIDE_DROP_LEN = CO_TOP_NODE - BUS_Y                         // 20
const COLLIS_LEN = COLLIS_LEFT - AARON_RIGHT                      // 20
const PEOPLE_CONNECTOR_LEN = PERSON_SECTION_TOP - CO_BOTTOM       // 20

function pct(v: number, total: number) {
  return `${(v / total) * 100}%`
}

function tooltipTransform(xVirtual: number): string {
  const xPct = xVirtual / VW
  if (xPct < 0.25) return "translate(0%, calc(-100% - 12px))"
  if (xPct > 0.75) return "translate(-100%, calc(-100% - 12px))"
  return "translate(-50%, calc(-100% - 12px))"
}

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)
  const [activeCompany, setActiveCompany] = useState<string | null>(null)
  const [activeAI, setActiveAI] = useState<string | null>(null)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 700)
    const t3 = setTimeout(() => setPhase(3), 1100)
    const t4 = setTimeout(() => setPhase(4), 1500)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [])

  const activeData = companies.find((c) => c.id === activeCompany) ?? null
  const activeAIData = companies.find((c) => c.id === activeAI) ?? null
  const activeAIIndex = activeAIData ? companies.indexOf(activeAIData) : -1

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <main className="w-full max-w-6xl">
        {/* Header nav */}
        <div className="flex items-center justify-between mb-12">
          <Link
            href="/"
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
          >
            <svg className="w-3 h-3 transform group-hover:-translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Aaron West</span>
          </Link>
          <div className="text-xs text-muted-foreground font-mono">PORTFOLIO</div>
        </div>

        {/* Diagram */}
        <div className="overflow-x-auto">
          <div className="relative" style={{ aspectRatio: `${VW} / ${VH}`, minWidth: "800px" }}>

            {/* SVG — orthogonal lines only */}
            <svg
              viewBox={`0 0 ${VW} ${VH}`}
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Aaron straight down → West / bus junction */}
              <line
                x1={AARON_CX} y1={AARON_BOTTOM} x2={AARON_CX} y2={CO_TOP_NODE}
                stroke="hsl(var(--muted-foreground))" strokeWidth="1.5"
                style={{
                  strokeDasharray: AARON_VERTICAL_LEN,
                  strokeDashoffset: phase >= 1 ? 0 : AARON_VERTICAL_LEN,
                  transition: "stroke-dashoffset 0.5s ease-in-out",
                }}
              />
              {/* Bus left */}
              <line
                x1={AARON_CX} y1={BUS_Y} x2={companies[0].coCX} y2={BUS_Y}
                stroke="hsl(var(--muted-foreground))" strokeWidth="1.5"
                style={{
                  strokeDasharray: BUS_LEFT_LEN,
                  strokeDashoffset: phase >= 2 ? 0 : BUS_LEFT_LEN,
                  transition: "stroke-dashoffset 0.5s ease-in-out",
                }}
              />
              {/* Bus right */}
              <line
                x1={AARON_CX} y1={BUS_Y} x2={companies[2].coCX} y2={BUS_Y}
                stroke="hsl(var(--muted-foreground))" strokeWidth="1.5"
                style={{
                  strokeDasharray: BUS_RIGHT_LEN,
                  strokeDashoffset: phase >= 2 ? 0 : BUS_RIGHT_LEN,
                  transition: "stroke-dashoffset 0.5s ease-in-out",
                }}
              />
              {/* EHS and Zygur drops (West shares Aaron vertical) */}
              {[companies[0], companies[2]].map((company) => (
                <line
                  key={`drop-${company.id}`}
                  x1={company.coCX} y1={BUS_Y} x2={company.coCX} y2={CO_TOP_NODE}
                  stroke="hsl(var(--muted-foreground))" strokeWidth="1.5"
                  style={{
                    strokeDasharray: SIDE_DROP_LEN,
                    strokeDashoffset: phase >= 3 ? 0 : SIDE_DROP_LEN,
                    transition: "stroke-dashoffset 0.2s ease-in-out",
                  }}
                />
              ))}
              {/* AI node connectors */}
              {AI_POSITIONS.map((ai) => (
                <line
                  key={`ai-connector-${ai.id}`}
                  x1={ai.left - AI_GAP} y1={AI_MID_Y} x2={ai.left} y2={AI_MID_Y}
                  stroke="hsl(var(--muted-foreground))" strokeWidth="1.5"
                  style={{
                    strokeDasharray: AI_GAP,
                    strokeDashoffset: phase >= 3 ? 0 : AI_GAP,
                    transition: "stroke-dashoffset 0.25s ease-in-out 100ms",
                  }}
                />
              ))}
              {/* Collis AI connector */}
              <line
                x1={AARON_RIGHT} y1={CONNECTOR_Y} x2={COLLIS_LEFT} y2={CONNECTOR_Y}
                stroke="hsl(var(--muted-foreground))" strokeWidth="1.5"
                style={{
                  strokeDasharray: COLLIS_LEN,
                  strokeDashoffset: phase >= 1 ? 0 : COLLIS_LEN,
                  transition: "stroke-dashoffset 0.2s ease-in-out 150ms",
                }}
              />
              {/* Collis AI → AI CEO reporting lines (dashed = dotted-line reporting) */}
              <line
                x1={COLLIS_CX} y1={COLLIS_BOTTOM} x2={COLLIS_CX} y2={COLLIS_BUS_Y}
                stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="4 4"
                style={{ opacity: phase >= 3 ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}
              />
              <line
                x1={COLLIS_CX} y1={COLLIS_BUS_Y} x2={AI_POSITIONS[0].cX} y2={COLLIS_BUS_Y}
                stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="4 4"
                style={{ opacity: phase >= 3 ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}
              />
              <line
                x1={COLLIS_CX} y1={COLLIS_BUS_Y} x2={AI_POSITIONS[2].cX} y2={COLLIS_BUS_Y}
                stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="4 4"
                style={{ opacity: phase >= 3 ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}
              />
              {AI_POSITIONS.map((ai) => (
                <line
                  key={`ceo-drop-${ai.id}`}
                  x1={ai.cX} y1={COLLIS_BUS_Y} x2={ai.cX} y2={AI_TOP}
                  stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="4 4"
                  style={{ opacity: phase >= 3 ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}
                />
              ))}

              {/* Company → people connectors */}
              {companies.map((company) => (
                <line
                  key={`people-drop-${company.id}`}
                  x1={company.coCX} y1={CO_BOTTOM} x2={company.coCX} y2={PERSON_SECTION_TOP}
                  stroke="hsl(var(--muted-foreground))" strokeWidth="1.5"
                  style={{
                    strokeDasharray: PEOPLE_CONNECTOR_LEN,
                    strokeDashoffset: phase >= 4 ? 0 : PEOPLE_CONNECTOR_LEN,
                    transition: "stroke-dashoffset 0.2s ease-in-out",
                  }}
                />
              ))}
            </svg>

            {/* Aaron node */}
            <div
              className="absolute"
              style={{
                left: pct(AARON_CX - AARON_W / 2, VW),
                top: pct(AARON_TOP, VH),
                width: pct(AARON_W, VW),
                height: pct(AARON_H, VH),
              }}
            >
              <div className="w-full h-full border border-border rounded-lg bg-background flex flex-col items-center justify-center gap-2 p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/aaron-west-logo.png"
                  alt="Aaron West"
                  style={{ height: "32px", width: "auto", maxWidth: "80%", objectFit: "contain", filter: isDark ? "invert(1)" : "none" }}
                />
                <div className="text-center">
                  <div className="text-xs font-medium text-foreground">Aaron West</div>
                  <div className="text-xs text-muted-foreground">Owner</div>
                </div>
              </div>
            </div>

            {/* Collis AI node */}
            <div
              className="absolute"
              style={{
                left: pct(COLLIS_LEFT, VW),
                top: pct(COLLIS_TOP, VH),
                width: pct(COLLIS_W, VW),
                height: pct(COLLIS_H, VH),
              }}
            >
              <div className="w-full h-full border border-border rounded-lg bg-background flex flex-col items-center justify-center gap-1 p-4">
                <div className="text-xs font-medium text-foreground">Collis AI</div>
                <div className="text-xs text-muted-foreground text-center leading-tight">Co-Owner</div>
              </div>
            </div>

            {/* Company nodes */}
            {companies.map((company) => (
              <div
                key={company.id}
                className="absolute"
                style={{
                  left: pct(company.coCX - CO_W / 2, VW),
                  top: pct(CO_TOP_NODE, VH),
                  width: pct(CO_W, VW),
                  height: pct(CO_H, VH),
                  opacity: phase >= 3 ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActiveCompany(company.id)}
                  onMouseLeave={() => setActiveCompany(null)}
                  className={[
                    "flex flex-col gap-2 w-full h-full border rounded-lg p-4 bg-background transition-colors duration-300 no-underline overflow-hidden",
                    activeCompany === company.id
                      ? "border-muted-foreground/50"
                      : "border-border hover:border-muted-foreground/50",
                  ].join(" ")}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={isDark ? company.logoDark : company.logoLight}
                    alt={company.name}
                    style={{
                      height: "38px",
                      width: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      filter: (company.invertOnDark ? isDark : !isDark) ? "invert(1)" : "none",
                    }}
                  />
                  <div>
                    <div className="text-xs font-medium text-foreground leading-tight">{company.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 leading-tight">{company.domain}</div>
                    <div className="text-[10px] text-muted-foreground/70 mt-1.5 leading-relaxed">{company.tagline}</div>
                  </div>
                </a>
              </div>
            ))}

            {/* AI nodes — to the right of each company */}
            {companies.map((company, i) => (
              <div
                key={`${company.id}-ai`}
                className="absolute"
                style={{
                  left: pct(AI_POSITIONS[i].left, VW),
                  top: pct(AI_TOP, VH),
                  width: pct(AI_W, VW),
                  height: pct(AI_H, VH),
                  opacity: phase >= 3 ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out 100ms",
                }}
              >
                <div
                  className="w-full h-full border border-border rounded-lg bg-background flex flex-col items-center justify-center gap-1 p-4 cursor-default transition-colors duration-300 hover:border-muted-foreground/50"
                  onMouseEnter={() => setActiveAI(company.id)}
                  onMouseLeave={() => setActiveAI(null)}
                >
                  <div className="text-xs font-medium text-foreground text-center leading-tight">{company.ai}</div>
                  <div className="text-[10px] text-muted-foreground font-mono">CEO</div>
                </div>
              </div>
            ))}

            {/* People cards under each company */}
            {companies.map((company) =>
              company.people.map((name, i) => (
                <div
                  key={`${company.id}-${name}`}
                  className="absolute"
                  style={{
                    left: pct(company.coCX - PERSON_W / 2, VW),
                    top: pct(PERSON_SECTION_TOP + i * PERSON_ROW_STEP, VH),
                    width: pct(PERSON_W, VW),
                    height: pct(PERSON_H, VH),
                    opacity: phase >= 4 ? 1 : 0,
                    transition: `opacity 0.4s ease-in-out ${i * 60}ms`,
                  }}
                >
                  <div className="w-full h-full border border-border rounded-md bg-background flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">{name}</span>
                  </div>
                </div>
              ))
            )}

            {/* Company tooltip */}
            {activeData && (
              <div
                className="absolute z-10 pointer-events-none"
                style={{
                  left: pct(activeData.coCX, VW),
                  top: pct(CO_TOP_NODE, VH),
                  transform: tooltipTransform(activeData.coCX),
                }}
              >
                <div className="border border-border rounded-lg p-3 shadow-xl w-52"
                  style={{ backgroundColor: "hsl(var(--background))" }}>
                  <div className="text-xs font-medium text-foreground mb-1">{activeData.name}</div>
                  <div className="text-xs text-muted-foreground font-mono mb-2">{activeData.tagline}</div>
                  <div className="text-xs text-muted-foreground/80 leading-relaxed">{activeData.description}</div>
                </div>
              </div>
            )}

            {/* AI tooltip */}
            {activeAIData && activeAIIndex >= 0 && (
              <div
                className="absolute z-10 pointer-events-none"
                style={{
                  left: pct(AI_POSITIONS[activeAIIndex].cX, VW),
                  top: pct(AI_TOP, VH),
                  transform: tooltipTransform(AI_POSITIONS[activeAIIndex].cX),
                }}
              >
                <div className="border border-border rounded-lg p-3 shadow-xl w-56"
                  style={{ backgroundColor: "hsl(var(--background))" }}>
                  <div className="text-xs font-medium text-foreground mb-1">{activeAIData.ai}</div>
                  <div className="text-[10px] text-muted-foreground font-mono mb-2">CEO — Reports to Collis AI</div>
                  <div className="text-xs text-muted-foreground/80 leading-relaxed">{activeAIData.aiDescription}</div>
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
              <svg className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm10.657 0l-.707.707a1 1 0 00-1.414-1.414l.707-.707a1 1 0 011.414 0zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </main>
    </div>
  )
}
