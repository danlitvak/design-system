"use client"

import {
  LayoutDashboard, Users, BarChart3, Settings, Search, Bell, ChevronDown,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const NAV = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: BarChart3, label: "Analytics" },
  { icon: Users, label: "Customers" },
  { icon: Settings, label: "Settings" },
]
const STATS = [
  { label: "Revenue", value: "$12,480", delta: "+12.5%" },
  { label: "Active users", value: "2,310", delta: "+4.1%" },
  { label: "Churn", value: "1.2%", delta: "-0.3%" },
]

/**
 * Self-contained dashboard shell for previews. For a full-page app,
 * the library also ships the `Sidebar` primitive (position: fixed).
 */
export function DashboardShell() {
  return (
    <div className="flex h-[440px] overflow-hidden rounded-lg border bg-background text-sm">
      <aside className="hidden w-52 flex-col border-r bg-sidebar p-3 sm:flex">
        <div className="flex items-center gap-2 px-2 py-1 font-semibold"><span className="size-5 bg-foreground" />Acme</div>
        <Separator className="my-3" />
        <nav className="grid gap-1">
          {NAV.map((n) => (
            <button key={n.label} className={cn("flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-muted-foreground hover:bg-accent hover:text-foreground", n.active && "bg-accent text-foreground")}>
              <n.icon className="size-4" /> {n.label}
            </button>
          ))}
        </nav>
        <div className="mt-auto flex items-center gap-2 rounded-md p-2 hover:bg-accent">
          <Avatar className="size-7"><AvatarFallback>DL</AvatarFallback></Avatar>
          <div className="leading-tight"><div className="font-medium">Daniel</div><div className="text-xs text-muted-foreground">Pro</div></div>
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-3 border-b px-4 py-2.5">
          <InputGroup className="max-w-xs">
            <InputGroupAddon><Search /></InputGroupAddon>
            <InputGroupInput placeholder="Search…" />
          </InputGroup>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon"><Bell /></Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">Daniel <ChevronDown className="size-4" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4">
          <h2 className="cn-font-heading text-lg font-semibold">Overview</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-lg border bg-card p-4">
                <div className="text-xs text-muted-foreground">{s.label}</div>
                <div className="mt-1 text-2xl font-semibold tabular-nums">{s.value}</div>
                <Badge variant="secondary" className="mt-2">{s.delta}</Badge>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border bg-card p-4">
            <div className="text-sm font-medium">Recent activity</div>
            <div className="mt-3 space-y-2">
              {["Deployed v2.1", "New signup: acme.co", "Invoice #1042 paid"].map((a) => (
                <div key={a} className="flex items-center gap-2 text-muted-foreground"><span className="size-1.5 rounded-full bg-foreground" />{a}</div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
