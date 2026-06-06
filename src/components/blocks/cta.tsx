import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/motion"

export function CTA() {
  return (
    <Reveal>
      <section className="rounded-lg border bg-primary px-6 py-12 text-center text-primary-foreground">
        <h2 className="cn-font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-primary-foreground/80">
          Let's talk about what you're building and how I can help.
        </p>
        <Button size="lg" variant="secondary" className="mt-6">
          Start a conversation <ArrowRight />
        </Button>
      </section>
    </Reveal>
  )
}
