"use client"

import { Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { SiteNavbar } from "@/components/blocks/site-navbar"
import { Hero } from "@/components/blocks/hero"
import { StatsBand } from "@/components/blocks/stats"
import { ProjectGrid, FeatureBento } from "@/components/blocks/project-card"
import { CTA } from "@/components/blocks/cta"
import { ContactForm } from "@/components/blocks/contact-form"
import { SiteFooter } from "@/components/blocks/site-footer"
import { ArticleLayout } from "@/components/blocks/article-layout"
import { DashboardShell } from "@/components/blocks/dashboard-shell"
import { PricingTable } from "@/components/blocks/pricing"
import { FAQ } from "@/components/blocks/faq"
import { LoginForm, SignupForm } from "@/components/blocks/auth-forms"
import {
  FadeIn, Reveal, Stagger, StaggerItem, AnimatedCounter, Marquee,
} from "@/components/motion/motion"

function Head({ id, title, note }: { id: string; title: string; note?: string }) {
  return (
    <div className="flex items-center justify-between">
      <h2 id={id} className="scroll-mt-24 text-sm font-medium tracking-wide text-muted-foreground uppercase">{title}</h2>
      {note && <Badge variant="outline">{note}</Badge>}
    </div>
  )
}
function Frame({ children, pad = true }: { children: React.ReactNode; pad?: boolean }) {
  return <div className={"overflow-hidden rounded-lg border bg-background " + (pad ? "p-6" : "")}>{children}</div>
}

export function BlocksSection() {
  return (
    <section className="space-y-4">
      <Head id="blocks" title="Marketing & portfolio blocks" note="8 blocks" />
      <div className="space-y-6">
        <Frame pad={false}><SiteNavbar /></Frame>
        <Frame pad={false}><Hero /></Frame>
        <StatsBand />
        <ProjectGrid />
        <FeatureBento />
        <CTA />
        <Frame><div className="mx-auto max-w-2xl"><h3 className="cn-font-heading mb-4 text-lg font-semibold">Get in touch</h3><ContactForm /></div></Frame>
        <Frame pad={false}><SiteFooter /></Frame>
      </div>
    </section>
  )
}

export function MotionSection() {
  return (
    <section className="space-y-4">
      <Head id="motion" title="Motion primitives" note="framer-motion" />
      <div className="grid gap-4 md:grid-cols-2">
        <Frame>
          <div className="mb-3 text-sm text-muted-foreground">FadeIn / Reveal</div>
          <Reveal className="rounded-md border bg-card p-4 text-sm">I slide + fade in when scrolled into view.</Reveal>
          <FadeIn delay={0.1} className="mt-3 rounded-md border bg-card p-4 text-sm">I fade in on mount.</FadeIn>
        </Frame>
        <Frame>
          <div className="mb-3 text-sm text-muted-foreground">Stagger</div>
          <Stagger className="grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <StaggerItem key={i} className="flex h-14 items-center justify-center rounded-md border bg-card text-sm">{i + 1}</StaggerItem>
            ))}
          </Stagger>
        </Frame>
        <Frame>
          <div className="mb-3 text-sm text-muted-foreground">AnimatedCounter</div>
          <div className="cn-font-heading text-4xl font-semibold tabular-nums"><AnimatedCounter value={1284} suffix="+" /></div>
        </Frame>
        <Frame>
          <div className="mb-3 text-sm text-muted-foreground">Marquee</div>
          <Marquee speed={18}>
            {["Next.js", "Tailwind", "Three.js", "Prisma", "Stripe", "Sanity"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 rounded-md border bg-card px-3 py-1.5 text-sm"><Star className="size-3.5" />{t}</span>
            ))}
          </Marquee>
        </Frame>
      </div>
    </section>
  )
}

export function BlogSection() {
  return (
    <section className="space-y-4">
      <Head id="blog" title="Blog & rich text" note="Prose + TOC" />
      <Reveal className="overflow-hidden rounded-lg border bg-background p-6"><ArticleLayout /></Reveal>
    </section>
  )
}

export function SaaSSection() {
  return (
    <section className="space-y-4">
      <Head id="saas" title="SaaS & app shell" note="auth · dashboard · pricing" />
      <div className="space-y-6">
        <FadeIn><DashboardShell /></FadeIn>
        <Reveal><PricingTable /></Reveal>
        <Reveal className="grid place-items-center gap-6 rounded-lg border bg-muted/40 p-6 sm:grid-cols-2">
          <LoginForm />
          <SignupForm />
        </Reveal>
        <div className="rounded-lg border bg-background p-6">
          <h3 className="cn-font-heading mb-4 text-center text-lg font-semibold">Frequently asked</h3>
          <FAQ />
        </div>
      </div>
    </section>
  )
}
