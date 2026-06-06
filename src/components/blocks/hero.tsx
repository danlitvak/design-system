"use client"

import { ArrowRight, Code2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/motion/motion"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/10 blur-3xl animate-[aurora_9s_ease-in-out_infinite] dark:bg-foreground/15" />
        <div className="absolute top-1/3 left-1/3 size-[28rem] rounded-full bg-muted-foreground/10 blur-3xl animate-[aurora-2_11s_ease-in-out_infinite]" />
      </div>
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <FadeIn>
          <Badge variant="secondary" className="mb-5">Available for work</Badge>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1 className="cn-font-heading text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Building thoughtful software, end to end.
          </h1>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="mx-auto mt-5 max-w-xl text-balance text-muted-foreground">
            Engineer and designer focused on fast, accessible interfaces.
            Currently working on web apps, 3D, and developer tools.
          </p>
        </FadeIn>
        <FadeIn delay={0.24}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button size="lg">View work <ArrowRight /></Button>
            <Button size="lg" variant="outline"><Code2 /> GitHub</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
