"use client"

import { useEffect, useRef } from "react"

export type ShapeKind = "ico" | "dodeca" | "cube" | "tetra" | "octa"

type Vec3 = [number, number, number]
type Shape = { V: Vec3[]; E: [number, number][] }

/** Build a wireframe: every pair of vertices at the shortest distance becomes an edge. */
function buildShape(raw: number[][]): Shape {
  const V = raw.map((v) => {
    const len = Math.hypot(...v)
    return v.map((x) => x / len) as Vec3
  })
  const dist = (i: number, j: number) => Math.hypot(...V[i].map((x, k) => x - V[j][k]))
  let min = Infinity
  for (let i = 0; i < V.length; i++) {
    for (let j = i + 1; j < V.length; j++) min = Math.min(min, dist(i, j))
  }
  const E: [number, number][] = []
  for (let i = 0; i < V.length; i++) {
    for (let j = i + 1; j < V.length; j++) if (dist(i, j) < min * 1.01) E.push([i, j])
  }
  return { V, E }
}

const SHAPES: Record<ShapeKind, Shape> = (() => {
  const phi = (1 + Math.sqrt(5)) / 2
  const ico: number[][] = []
  const dod: number[][] = []
  const cube: number[][] = []
  for (const a of [-1, 1]) {
    for (const b of [-1, 1]) ico.push([0, a, b * phi], [a, b * phi, 0], [b * phi, 0, a])
  }
  for (const x of [-1, 1]) {
    for (const y of [-1, 1]) {
      for (const z of [-1, 1]) {
        cube.push([x, y, z])
        dod.push([x, y, z])
      }
    }
  }
  for (const a of [-1, 1]) {
    for (const b of [-1, 1]) dod.push([0, a / phi, b * phi], [a / phi, b * phi, 0], [b * phi, 0, a / phi])
  }
  return {
    ico: buildShape(ico),
    dodeca: buildShape(dod),
    cube: buildShape(cube),
    tetra: buildShape([
      [1, 1, 1],
      [1, -1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
    ]),
    octa: buildShape([
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1],
    ]),
  }
})()

const RAMP = ".:-=+*#%@"

type Props = {
  kind?: ShapeKind
  /** How many character cells wide the wireframe is. */
  cols?: number
  className?: string
  /** Phase offset in ms so neighbours don't spin in lockstep. */
  phase?: number
}

export default function AsciiShape({ kind = "ico", cols = 18, className = "", phase = 0 }: Props) {
  const ref = useRef<HTMLPreElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const { V, E } = SHAPES[kind]
    const rows = Math.round(cols * 0.52)
    const speed = 0.9

    const draw = (t0: number) => {
      const t = t0 * speed + phase
      const A = t * 0.00035
      const B = t * 0.00022
      const ca = Math.cos(A)
      const sa = Math.sin(A)
      const cb = Math.cos(B)
      const sb = Math.sin(B)

      const P = V.map(([x, y, z]) => {
        const x1 = x * ca + z * sa
        const z1 = -x * sa + z * ca
        return [x1, y * cb - z1 * sb, y * sb + z1 * cb] as Vec3
      })

      const buf = new Array(cols * rows).fill(" ")
      const zb = new Array(cols * rows).fill(Infinity)
      const S = rows * 0.42
      const cx = (cols - 1) / 2
      const cy = (rows - 1) / 2

      const plot = (p: Vec3, ch: string) => {
        const k = 3.2 / (3.2 + p[2])
        const c = Math.round(cx + p[0] * S * 1.67 * k)
        const r = Math.round(cy + p[1] * S * k)
        if (c < 0 || c >= cols || r < 0 || r >= rows) return
        const i = r * cols + c
        if (p[2] < zb[i]) {
          zb[i] = p[2]
          buf[i] = ch
        }
      }

      const shade = (z: number) => {
        const idx = Math.round((1 - (z + 1) / 2) * (RAMP.length - 1))
        return RAMP[Math.max(0, Math.min(RAMP.length - 1, idx))]
      }

      for (const [i, j] of E) {
        const a = P[i]
        const b = P[j]
        for (let n = 0; n <= 48; n++) {
          const u = n / 48
          plot(
            [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u],
            shade(a[2] + (b[2] - a[2]) * u),
          )
        }
      }
      for (const p of P) plot([p[0], p[1], p[2] - 0.02], "@")

      let out = ""
      for (let r = 0; r < rows; r++) out += buf.slice(r * cols, (r + 1) * cols).join("") + "\n"
      el.textContent = out
    }

    // First frame straight away, so it is there even with motion switched off.
    draw(2500)

    if (typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let raf = 0
    let running = false
    const loop = (t: number) => {
      draw(t)
      raf = requestAnimationFrame(loop)
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true
        raf = requestAnimationFrame(loop)
      } else if (!entry.isIntersecting && running) {
        running = false
        cancelAnimationFrame(raf)
      }
    })
    io.observe(el)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [kind, cols, phase])

  return (
    <pre
      ref={ref}
      aria-hidden="true"
      className={`select-none whitespace-pre font-mono leading-none ${className}`}
    />
  )
}
