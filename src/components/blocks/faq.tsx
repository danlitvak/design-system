import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion"

const ITEMS = [
  { q: "Can I use this in a commercial project?", a: "Yes. The components are yours to copy, modify, and ship in any project." },
  { q: "Does it support dark mode?", a: "Yes — every token has a light and dark value. Wrap your app in the ThemeProvider and use the ModeToggle." },
  { q: "How do I change the theme?", a: "Edit the CSS variables in index.css. Colors, radius, and fonts all flow from there." },
  { q: "Does it work with Next.js?", a: "Yes. Components include the 'use client' directive and drop into the App Router. See NEXTJS.md." },
]

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="mx-auto w-full max-w-2xl">
      {ITEMS.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
