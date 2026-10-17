"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import AsciiShape, { type ShapeKind } from "@/components/ascii-shape"
import { User, Sprout, Lightbulb, Heart, Key, Compass, Trophy, HardHat, Boxes, Rocket, Briefcase, Target, Link2, Building2, type LucideIcon } from "lucide-react"

const storyIcons: Record<string, LucideIcon> = {
  "Who am I?": User,
  "Where did I start?": Sprout,
  "What do I believe?": Lightbulb,
  "Who am I doing this for?": Heart,
  "Why me?": Key,
  "Where am I going?": Compass,
  "What's the payoff?": Trophy,
}

function SectionHeading({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}

const story = [
  {
    q: "Who am I?",
    a: "I'm a 20+ year EHS/HSE veteran who has been building safety software since 2013. I work full time as an HSE Manager at Giga Energy, and my wife and daughter run our EHS company full time.",
  },
  {
    q: "Where did I start?",
    a: "Workers' comp insurance risk and safety. From there I worked as a consultant and a direct hire across construction, mining, manufacturing, and industrial services -- enough industries to see the same problems show up in different clothes.",
  },
  {
    q: "What do I believe?",
    a: "That AI and software automation can drastically improve the lives of EHS/HSE/SHE/safety professionals -- taking the work they hate off their plates so they can spend their time on what they're good at. Done right, it cuts cost and improves life safety for the people on site at the same time. Technology can be dangerous, and people have always used it for good and for bad. I want to be one of the ones who uses it for good.",
  },
  {
    q: "Who am I doing this for?",
    a: "God, safety professionals, their employers, my family, and myself. Safety professionals and their employers have been bogged down by workforce digitization, and enterprise EHS/HSE/safety software has become bloated and time consuming to manage. It makes a job people care about worse than it needs to be. Gerty is going to solve this problem better than anyone or anything else. My family and I get real satisfaction from this work because it helps people get past hard problems, and they love us for it. My wife and daughter work in the business with me, and hopefully one day my young son will too.",
  },
  {
    q: "Why me?",
    a: "Twenty years is a real lever over someone new to the industry. I've picked up plenty of cheat codes personally, and the old school safety pros from the 80s and 90s passed down knowledge to me that I've found to be the most powerful of all -- and it isn't mentioned anywhere online or in the larger safety discussions. Those pros came from places like DuPont, Ingersoll Rand, and L3 Communications. I've also worked inside big tech, including Meta, where I learned the software and automation side. I combine old school philosophies, principles, strategies, and tactics with a tech company's tech-first approach to safety. Anyone who works with me gets all of it, and we have fun doing it, because I always remember to smile and enjoy the journey.",
  },
  {
    q: "Where am I going?",
    a: "I'm going to spend my lasting years building the last EHS/HSE/safety technology. It will be an AI that automates everything the safety professional hates doing, so he or she can spend more time on what AI can't do: talking face to face with people. My vision is a safety pro who wakes up looking forward to going to site, decides what the automation does, and gets to focus on the part of the job they actually enjoy. The dumb stuff happens in the background without them ever thinking about it.",
  },
  {
    q: "What's the payoff?",
    a: "Gerty becomes the go-to EHS/HSE/safety technology, and a community of practitioners surfaces around it -- people excited about safety again because they can finally make the profession about what they want it to be about.",
  },
]

const endgame = [
  "Gerty runs your system and automates what you hate, so you never have to type or look at a computer screen again. It's a voice assistant, with text options, on a phone or a wearable.",
  "Typing is slow and outdated.",
  "Voice is the most natural way to work.",
  "You'll be more productive with Gerty.",
]

const projects: { name: string; url: string; role: string; desc: string; shape: ShapeKind }[] = [
  {
    name: "Gerty",
    url: "gerty.ai",
    role: "Primary",
    desc: "EHS, HSE and safety technology that takes the work safety professionals hate off their plates. Endgame is no more screens, no more tablets or phones, only talk to a wearable and look at a screen if you like doing that.",
    shape: "dodeca",
  },
  {
    name: "Jevor",
    url: "jevor.ai",
    role: "Supporting",
    desc: "A coding assistant in your terminal. It combines the power of TypeSafe's Jev technology with OpenRouter, switching models mid-session and mid-task, for 5-80% savings on easy to moderately difficult agentic coding.",
    shape: "ico",
  },
  {
    name: "Sandboxed Operations Gateway (SOG)",
    url: "sog.dev",
    role: "Supporting",
    desc: "A shared gate and sandbox runner for AI agent actions. The safe executable environment Gerty and Jevor Enterprise runs on.",
    shape: "cube",
  },
]

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10 sm:px-6">
      <main className="mx-auto w-full max-w-3xl">
        {/* Print */}
        <button
          onClick={() => window.print()}
          className="print-hide flip-button mb-8 flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-muted/40 px-6 py-4 font-mono text-sm uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5V4.5h10.5v3M6.75 7.5h10.5a3 3 0 013 3v6h-3.75m-9.75 0H3.75v-6a3 3 0 013-3m3.75 6h4.5m-4.5 3.75h4.5m-7.5-3.75h-.008v3.75h12.016v-3.75h-.008" />
          </svg>
          Print / Save as PDF
        </button>

        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {/* Left: Name, Role and Photo */}
          <div className="space-y-4">
            <div className="flex flex-col gap-5">
              <Image
                src="/images/aaron-west.jpeg"
                alt="Aaron West"
                width={80}
                height={80}
                className="rounded-lg object-cover w-20 h-20"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/aaron-west-logo.png"
                alt=""
                style={{ height: "42px", width: "auto", maxWidth: "180px", objectFit: "contain", objectPosition: "left", display: "block", marginTop: "12px", filter: isDark ? "invert(1)" : "none" }}
              />
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight">Aaron West</h1>
                <div className="text-xs text-muted-foreground">John 3:16</div>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Unavailable for Consulting
              </div>
              <div>Texas - In Person, Worldwide - Virtual</div>
            </div>
          </div>

          {/* Center: Role and Focus */}
          <div className="space-y-6">
            <div className="space-y-3">
              <SectionHeading icon={Briefcase}>ROLE</SectionHeading>
              <div className="space-y-1">
                <div className="text-foreground font-medium text-sm">Industrial Safety &amp; Critical Infrastructure Operations + Insurance &amp; Legal Risk</div>
                <div className="text-xs text-muted-foreground">
                  20+ years keeping industrial and critical infrastructure operations safe, compliant, and running.
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <SectionHeading icon={Target}>FOCUS AREAS</SectionHeading>
              <div className="flex flex-wrap gap-2">
                {["EHS", "Industrial Operations", "Critical Infrastructure", "Data Centers", "Risk", "GRC", "Facilities Ops", "HSE", "AI", "RPA", "Automation", "Software", "Legal", "Insurance Risk", "ESG", "Safety", "Health", "Environmental", "Stewardship", "Sustainability"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <SectionHeading icon={Building2}>COMPANIES</SectionHeading>
              <div className="space-y-3 text-sm">
                <div className="space-y-1">
                  <div className="text-foreground">
                    EHS, Inc <span className="text-muted-foreground text-xs">(FKA OSHIFY Corporation)</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <a href="https://ehs.inc" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors duration-300">
                      ehs.inc
                    </a>
                    <a href="https://oshify.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors duration-300">
                      oshify.com
                    </a>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-foreground">Zygur Technologies Corp.</div>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <a href="https://zygur.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors duration-300">
                      zygur.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact */}
          <div className="space-y-3">
            <SectionHeading icon={Link2}>CONNECT</SectionHeading>
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
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {/* About */}
          <div className="space-y-3 md:col-span-2 lg:col-span-3">
            <SectionHeading icon={HardHat}>EXPERTISE</SectionHeading>
            <p className="text-sm text-muted-foreground leading-relaxed">
              20+ years in EHS and industrial operations — standing up the safety and compliance programs that keep industrial sites, manufacturing facilities, and data centers running without legal or regulatory trouble.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          <div className="space-y-3 md:col-span-2 lg:col-span-3">
            <SectionHeading icon={Boxes}>PROJECTS</SectionHeading>
            <div className="space-y-3">
              {projects.map((p) => (
                <Link
                  key={p.name}
                  href={`https://${p.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group break-inside-avoid border-b border-border/50 pb-4 hover:border-muted-foreground/50 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <AsciiShape
                      kind={p.shape}
                      cols={18}
                      phase={p.name.length * 900}
                      className="mt-0.5 shrink-0 text-[7px] text-muted-foreground/70 transition-colors duration-300 group-hover:text-muted-foreground"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-4 text-sm">
                        <span className="text-foreground">{p.name}</span>
                        <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{p.role} · {p.url}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.desc}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pt-1">
              I need more than one project moving at a time. Jevor and SOG run alongside Gerty, so while one project is waiting on a decision or a build, the others keep moving. Gerty stays the point of it all.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {story.map((item) => (
            <div key={item.q} className="space-y-3 md:col-span-2 lg:col-span-3">
              <SectionHeading icon={storyIcons[item.q] ?? Compass}>{item.q.toUpperCase()}</SectionHeading>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* Endgame */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          <div className="space-y-3 md:col-span-2 lg:col-span-3">
            <SectionHeading icon={Rocket}>REVERSE ENGINEERING THE ENDGAME</SectionHeading>
            {endgame.map((line) => (
              <p key={line} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-border">
          <div className="text-xs text-muted-foreground">
            ©Aaron West | ARR ;/ |{" "}
            <a href="/llms.txt" className="underline hover:text-foreground">
              llms.txt
            </a>
          </div>
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
