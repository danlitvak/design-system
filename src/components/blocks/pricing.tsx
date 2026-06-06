"use client"

import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const TIERS = [
  { name: "Hobby", price: "$0", period: "/mo", desc: "For personal projects.", features: ["1 project", "Community support", "Basic analytics"], cta: "Start free", featured: false },
  { name: "Pro", price: "$19", period: "/mo", desc: "For growing products.", features: ["Unlimited projects", "Priority support", "Advanced analytics", "Custom domains"], cta: "Go Pro", featured: true },
  { name: "Team", price: "$49", period: "/mo", desc: "For collaboration.", features: ["Everything in Pro", "Team roles", "Audit log", "SSO"], cta: "Contact sales", featured: false },
]

export function PricingTable() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {TIERS.map((t) => (
        <Card key={t.name} className={cn("flex flex-col", "transition-shadow duration-200 hover:shadow-md", t.featured && "border-foreground ring-1 ring-foreground")}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="cn-font-heading">{t.name}</CardTitle>
              {t.featured && <Badge>Popular</Badge>}
            </div>
            <CardDescription>{t.desc}</CardDescription>
            <div className="pt-2">
              <span className="text-3xl font-semibold tabular-nums">{t.price}</span>
              <span className="text-sm text-muted-foreground">{t.period}</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <Separator className="mb-4" />
            <ul className="space-y-2 text-sm">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2"><Check className="size-4 text-muted-foreground" />{f}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={t.featured ? "default" : "outline"}>{t.cta}</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
