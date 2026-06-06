"use client"

import * as React from "react"
import { CalendarDays, Clock } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Prose } from "@/components/blocks/prose"

export type TocItem = { id: string; label: string }

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav className="text-sm">
      <div className="mb-2 font-medium">On this page</div>
      <ul className="space-y-1.5 border-l">
        {items.map((it) => (
          <li key={it.id}>
            <a href={`#${it.id}`} className="-ml-px block border-l border-transparent pl-3 text-muted-foreground hover:border-foreground hover:text-foreground">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function ArticleLayout({
  title = "Designing a monochrome design system",
  tags = ["Design", "Engineering"],
  date = "June 6, 2026",
  readTime = "6 min read",
  toc,
  children,
}: {
  title?: string
  tags?: string[]
  date?: string
  readTime?: string
  toc?: TocItem[]
  children?: React.ReactNode
}) {
  const items =
    toc ?? [
      { id: "intro", label: "Introduction" },
      { id: "tokens", label: "Design tokens" },
      { id: "components", label: "Components" },
    ]
  return (
    <article className="mx-auto max-w-4xl">
      <header className="mb-8">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (<Badge key={t} variant="secondary">{t}</Badge>))}
        </div>
        <h1 className="cn-font-heading mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><CalendarDays className="size-4" />{date}</span>
          <span className="flex items-center gap-1.5"><Clock className="size-4" />{readTime}</span>
        </div>
      </header>
      <Separator />
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_200px]">
        <Prose>
          {children ?? (
            <>
              <h2 id="intro">Introduction</h2>
              <p>A design system keeps every screen consistent and every decision reusable. This is body text rendered through the <code>Prose</code> component, themed to your tokens.</p>
              <h2 id="tokens">Design tokens</h2>
              <p>Colors, spacing, radius, and type all flow from CSS variables, so a single edit retheme the whole product.</p>
              <blockquote>Good systems make the right thing the easy thing.</blockquote>
              <h2 id="components">Components</h2>
              <ul><li>Accessible by default</li><li>Composable primitives</li><li>Dark mode built in</li></ul>
            </>
          )}
        </Prose>
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <ScrollArea className="h-[60vh]">
              <TableOfContents items={items} />
            </ScrollArea>
          </div>
        </aside>
      </div>
    </article>
  )
}
