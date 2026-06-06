"use client"

import { AnimatedCounter, Stagger, StaggerItem } from "@/components/motion/motion"

const STATS = [
  { value: 48, suffix: "+", label: "Projects shipped" },
  { value: 7, label: "Years building" },
  { value: 99, suffix: "%", label: "Lighthouse score" },
  { value: 12, label: "Open-source repos" },
]

export function StatsBand() {
  return (
    <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-4">
      {STATS.map((s) => (
        <StaggerItem key={s.label} className="bg-card p-6 text-center">
          <div className="cn-font-heading text-3xl font-semibold tabular-nums">
            <AnimatedCounter value={s.value} suffix={s.suffix} />
          </div>
          <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
        </StaggerItem>
      ))}
    </Stagger>
  )
}
