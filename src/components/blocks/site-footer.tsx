import { Code2, Globe, AtSign } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const COLS = [
  { title: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "License"] },
]

export function SiteFooter({ brand = "Daniel L." }: { brand?: string }) {
  return (
    <footer className="w-full border-t bg-card">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-semibold"><span className="size-5 bg-foreground" />{brand}</div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">Building thoughtful software, end to end.</p>
            <div className="mt-4 flex gap-3 text-muted-foreground">
              <a href="#" aria-label="GitHub" className="hover:text-foreground"><Code2 className="size-5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Globe className="size-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-foreground"><AtSign className="size-5" /></a>
            </div>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-medium">{c.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {c.links.map((l) => (<li key={l}><a href="#" className="hover:text-foreground">{l}</a></li>))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {brand}. All rights reserved.</p>
      </div>
    </footer>
  )
}
