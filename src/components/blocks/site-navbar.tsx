"use client"

import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose,
} from "@/components/ui/sheet"

const LINKS = [
  { label: "Work", href: "#" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
]

export function SiteNavbar({ brand = "Daniel L." }: { brand?: string }) {
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="size-5 bg-foreground" />
          {brand}
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Button size="sm" className="ml-2">Get in touch</Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden"><Menu /></Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader><SheetTitle>{brand}</SheetTitle></SheetHeader>
            <nav className="grid gap-1 px-4">
              {LINKS.map((l) => (
                <SheetClose asChild key={l.label}>
                  <a href={l.href} className="rounded-md px-3 py-2 text-sm hover:bg-accent">{l.label}</a>
                </SheetClose>
              ))}
              <Button className="mt-2">Get in touch</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
