"use client"

import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/motion"

export type Project = {
  title: string
  description: string
  tags: string[]
}

const PROJECTS: Project[] = [
  { title: "Portfolio v2", description: "Next.js + Sanity site with 3D hero and blog.", tags: ["Next.js", "Three.js", "Sanity"] },
  { title: "dmtt", description: "Course platform with Stripe, Mux video, and auth.", tags: ["Stripe", "Prisma", "Mux"] },
  { title: "Wave-function collapse", description: "Procedural tile generator with live visualizer.", tags: ["TypeScript", "Canvas"] },
]

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden pt-0 transition-shadow duration-200 hover:shadow-md">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <div className="flex h-full items-center justify-center text-muted-foreground transition-transform duration-300 group-hover:scale-105">
          {project.title}
        </div>
      </AspectRatio>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {project.title}
          <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-wrap gap-1.5">
        {project.tags.map((t) => (<Badge key={t} variant="secondary">{t}</Badge>))}
      </CardFooter>
    </Card>
  )
}

export function ProjectGrid({ projects = PROJECTS }: { projects?: Project[] }) {
  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <StaggerItem key={p.title}><ProjectCard project={p} /></StaggerItem>
      ))}
    </Stagger>
  )
}

export function FeatureBento() {
  return (
    <Reveal className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
      <div className="rounded-lg border bg-card p-6 md:col-span-2 md:row-span-2">
        <h3 className="cn-font-heading text-lg font-semibold">Full-stack delivery</h3>
        <p className="mt-2 text-sm text-muted-foreground">From design system to database. Type-safe end to end.</p>
        <div className="mt-4 h-32 rounded-md bg-muted" />
      </div>
      <div className="rounded-lg border bg-card p-6">
        <h3 className="cn-font-heading font-semibold">Performance</h3>
        <p className="mt-1 text-sm text-muted-foreground">Sub-second loads, 99 Lighthouse.</p>
      </div>
      <div className="rounded-lg border bg-card p-6">
        <h3 className="cn-font-heading font-semibold">Accessibility</h3>
        <p className="mt-1 text-sm text-muted-foreground">Radix primitives, keyboard-first.</p>
      </div>
    </Reveal>
  )
}
