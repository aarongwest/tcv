"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const story = [
  {
    q: "Who am I?",
    a: "I am a 20+ year EHS/HSE veteran who has been building safety software since 2013. I currently work at Giga Energy as a full-time HSE Manager, and my wife and daughter run my EHS company full time.",
  },
  {
    q: "Where did I start?",
    a: "I started out in the workers' comp insurance risk and safety field and worked with all kinds of companies across diverse industries such as construction, mining, manufacturing, and industrial services. I worked as a consultant and as a direct hire at various times throughout my career.",
  },
  {
    q: "What do I believe?",
    a: "I believe that EHS/HSE/SHE/Safety professionals' lives can be drastically improved by AI and software automation. It can help them focus more on doing what they are good at and less on the things they hate. I also believe that AI and automation can increase cost efficiency while improving the life safety of its most valuable assets, the people, at the same time. Yes, technology can be dangerous. Throughout history people have used it for good AND bad. That will never change. I want to be the guy who uses it for good.",
  },
  {
    q: "Who am I doing this for?",
    a: "I am doing this for God, safety professionals, their employers, my family, and myself. Safety professionals and employers have become bogged down by workforce digitization, and today's enterprise EHS/HSE/Safety software has become bloated and time consuming to manage. This makes the job much worse than it needs to be. My family and I get enjoyment out of the work in this field because it helps people overcome difficult problems and they love us for it. That's very satisfying for us. My family works in the business with me, my wife and daughter, and hopefully one day my young son.",
  },
  {
    q: "Why me?",
    a: "20 years of experience gives you a huge lever over newcomers to the industry. Not only have I learned many cheat codes personally, but I've had the old school safety pros from the 80s and 90s pass down industry knowledge to me that I have found to be the most powerful yet but not mentioned at all online or in larger safety discussions. These pros come from places like DuPont, Ingersoll Rand, and L3 Communications. I have also worked inside some big tech companies such as Meta, where I learned more about the software and automation side of things. I combine the old school philosophies, principles, strategies and tactics with the tech company's tech-first approach to safety. Anyone who works with me not only benefits from all this, but they have fun too, because I always remember to smile and enjoy the journey.",
  },
  {
    q: "Where am I going?",
    a: "I am going to attempt to spend my lasting years building the last EHS/HSE/Safety technology. This tech will be an AI that can automate everything the safety professional hates doing, so he or she can spend more time doing what AI cannot: talking face to face with people. My vision is that every safety pro will wake up and look forward to going in to the site. They will enjoy their time at work because they get to decide what AI and automation does, so they can focus on what they enjoy doing every day. The final destination is safety pros love going in to work each day, and the dumb stuff happens automatically in the background without their knowledge.",
  },
  {
    q: "What's the payoff?",
    a: "Gerty becomes the go-to EHS/HSE/Safety technology. A community of practitioners surfaces because people become excited about EHS/HSE/Safety again, because they can make the profession about what they want it to be about.",
  },
]

const endgame = [
  "The end: Gerty runs your system and automates what you hate so you never have to type or look at a computer screen again. It's a voice assistant with text options from a mobile or wearable device.",
  "Belief 1: Typing is slow and outdated.",
  "Belief 2: Voice is the most natural way to work.",
  "Belief 3: You'll be more productive by using Gerty.",
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
                Available for Consulting (unavailable)
              </div>
              <div>Texas - In Person, Worldwide - Virtual</div>
            </div>
          </div>

          {/* Center: Role and Focus */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="text-xs text-muted-foreground font-mono">ROLE</div>
              <div className="space-y-1">
                <div className="text-foreground font-medium text-sm">Industrial Safety &amp; Critical Infrastructure Operations</div>
                <div className="text-xs text-muted-foreground">
                  20+ years keeping industrial and critical infrastructure operations safe, compliant, and running.
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs text-muted-foreground font-mono">FOCUS AREAS</div>
              <div className="flex flex-wrap gap-2">
                {["EHS", "Industrial Operations", "Critical Infrastructure", "Data Centers", "Full-Stack", "Risk", "GRC", "Facilities Ops"].map((skill) => (
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
