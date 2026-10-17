"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

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

const projects = [
  {
    name: "Gerty",
    url: "gerty.ai",
    role: "Primary",
    desc: "The last EHS/HSE/safety technology. Takes the work safety pros hate off their plates.",
  },
  {
    name: "Jevor",
    url: "jevor.ai",
    role: "Supporting",
    desc: "A coding assistant that lives in your terminal. It picks the most cost-effective AI model for each task, so building software costs less.",
  },
  {
    name: "Safe Operations Gateway",
    url: "sog.dev",
    role: "Supporting",
    desc: "Safe Operations Gateway. A shared gate and sandbox runner for AI agent actions, supporting Gerty and Jevor.",
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
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <main className="w-full max-w-5xl">
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
                <div className="text-xs" style={{ color: "#724cf9" }}>John 3:16</div>
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
              <div className="text-xs text-muted-foreground font-mono">ROLE</div>
              <div className="space-y-1">
                <div className="text-foreground font-medium text-sm">Industrial Safety &amp; Critical Infrastructure Operations + Legal &amp; Insurance Risk</div>
                <div className="text-xs text-muted-foreground">
                  20+ years keeping industrial and critical infrastructure operations safe, compliant, and running.
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs text-muted-foreground font-mono">FOCUS AREAS</div>
              <div className="flex flex-wrap gap-2">
                {["EHS", "Industrial Operations", "Critical Infrastructure", "Data Centers", "Full-Stack", "Risk", "GRC", "Facilities Ops", "HSE", "AI", "RPA", "Automation", "Software", "Legal", "Insurance Risk", "ESG"].map((skill) => (
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
                href="https://www.gigaenergy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors duration-300 text-sm"
              >
                <span>Giga Energy</span>
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
          <div className="space-y-3 md:col-span-2">
            <div className="text-xs text-muted-foreground font-mono">EXPERTISE</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              20+ years in EHS and industrial operations — standing up the safety and compliance programs that keep industrial sites, manufacturing facilities, and data centers running without legal or regulatory trouble.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          <div className="space-y-3 md:col-span-2">
            <div className="text-xs text-muted-foreground font-mono">PROJECTS</div>
            <div className="space-y-3">
              {projects.map((p) => (
                <Link
                  key={p.name}
                  href={`https://${p.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group border-b border-border/50 pb-3 hover:border-muted-foreground/50 transition-colors duration-300"
                >
                  <div className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-foreground">{p.name}</span>
                    <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{p.role} · {p.url}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.desc}</div>
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
            <div key={item.q} className="space-y-3 md:col-span-2">
              <div className="text-xs text-muted-foreground font-mono">{item.q.toUpperCase()}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* Endgame */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          <div className="space-y-3 md:col-span-2">
            <div className="text-xs text-muted-foreground font-mono">REVERSE ENGINEERING THE ENDGAME</div>
            {endgame.map((line) => (
              <p key={line} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-border">
          <div className="text-xs text-muted-foreground">©Aaron West | ARR ;/</div>
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
