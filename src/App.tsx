import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { format } from "date-fns"
import {
  Check, ChevronRight, ChevronsUpDown, Bell, Search, Calendar as CalIcon,
  Bold, Italic, Underline, ArrowUpDown, Command as CmdIcon, Inbox, Plus, Trash2,
  CreditCard, Settings, User, LogOut, Mail, Star,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Badge } from "@/components/ui/badge"
import { Kbd } from "@/components/ui/kbd"
import { Spinner } from "@/components/ui/spinner"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction,
} from "@/components/ui/card"
import {
  Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemGroup,
} from "@/components/ui/item"
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from "@/components/ui/empty"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle,
  DialogDescription, DialogFooter, DialogClose,
} from "@/components/ui/dialog"
import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle,
  AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction,
} from "@/components/ui/alert-dialog"
import {
  Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription,
} from "@/components/ui/sheet"
import {
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription,
  DrawerFooter, DrawerClose,
} from "@/components/ui/drawer"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { TooltipProvider } from "@/components/ui/tooltip"
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"
import {
  ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem,
  ContextMenuSeparator, ContextMenuShortcut,
} from "@/components/ui/context-menu"
import {
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem,
  MenubarSeparator, MenubarShortcut,
} from "@/components/ui/menubar"
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Pagination, PaginationContent, PaginationItem, PaginationLink,
  PaginationPrevious, PaginationNext, PaginationEllipsis,
} from "@/components/ui/pagination"
import {
  Command, CommandDialog, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandShortcut,
} from "@/components/ui/command"
import { Calendar } from "@/components/ui/calendar"
import {
  Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,
} from "@/components/ui/carousel"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField,
} from "@/components/ui/form"
import {
  InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator,
} from "@/components/ui/input-otp"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell, TableCaption,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { ExamplesGallery } from "@/components/preview/examples-gallery"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { Reveal, FadeIn } from "@/components/motion/motion"
import { BlocksSection, MotionSection, BlogSection, SaaSSection } from "@/components/showcase-blocks"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

/* ----------------------------- helpers ----------------------------- */

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">{title}</h2>
      <Reveal className="rounded-lg border bg-card p-6">{children}</Reveal>
    </section>
  )
}

/* ----------------------------- interactive bits ----------------------------- */

const FRAMEWORKS = [
  { value: "next", label: "Next.js" },
  { value: "vite", label: "Vite" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "nuxt", label: "Nuxt" },
]

function ComboboxDemo() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[240px] justify-between">
          {value ? FRAMEWORKS.find((f) => f.value === value)?.label : "Select framework…"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0">
        <Command>
          <CommandInput placeholder="Search framework…" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {FRAMEWORKS.map((f) => (
                <CommandItem
                  key={f.value}
                  value={f.value}
                  onSelect={(cur) => { setValue(cur === value ? "" : cur); setOpen(false) }}
                >
                  <Check className={value === f.value ? "opacity-100" : "opacity-0"} />
                  {f.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

function CommandPalette({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); setOpen(!open) }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, setOpen])
  const run = (label: string) => { setOpen(false); toast(`Ran: ${label}`) }
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={() => run("New file")}><Plus />New file<CommandShortcut>⌘N</CommandShortcut></CommandItem>
          <CommandItem onSelect={() => run("Search")}><Search />Search<CommandShortcut>⌘F</CommandShortcut></CommandItem>
          <CommandItem onSelect={() => run("Mail")}><Mail />Open inbox</CommandItem>
        </CommandGroup>
        <CommandGroup heading="Settings">
          <CommandItem onSelect={() => run("Profile")}><User />Profile</CommandItem>
          <CommandItem onSelect={() => run("Billing")}><CreditCard />Billing</CommandItem>
          <CommandItem onSelect={() => run("Settings")}><Settings />Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
          <CalIcon />
          {date ? format(date, "PPP") : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} autoFocus />
      </PopoverContent>
    </Popover>
  )
}

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 173, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 264, mobile: 140 },
]
const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-3)" },
} satisfies ChartConfig

function ChartDemo() {
  return (
    <ChartContainer config={chartConfig} className="h-[240px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

type Row = { invoice: string; status: "Paid" | "Pending" | "Overdue"; amount: number }
const ROWS: Row[] = [
  { invoice: "INV-001", status: "Paid", amount: 250 },
  { invoice: "INV-002", status: "Pending", amount: 150 },
  { invoice: "INV-003", status: "Overdue", amount: 350 },
  { invoice: "INV-004", status: "Paid", amount: 90 },
  { invoice: "INV-005", status: "Pending", amount: 420 },
]

function DataTable() {
  const [query, setQuery] = useState("")
  const [asc, setAsc] = useState(true)
  const rows = useMemo(() => {
    return ROWS
      .filter((r) => r.invoice.toLowerCase().includes(query.toLowerCase()) || r.status.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => (asc ? a.amount - b.amount : b.amount - a.amount))
  }, [query, asc])
  const badge = (s: Row["status"]) =>
    s === "Paid" ? "secondary" : s === "Pending" ? "outline" : "destructive"
  return (
    <div className="space-y-3">
      <InputGroup className="max-w-xs">
        <InputGroupAddon><Search /></InputGroupAddon>
        <InputGroupInput placeholder="Filter invoices…" value={query} onChange={(e) => setQuery(e.target.value)} />
      </InputGroup>
      <Table>
        <TableCaption>Live filter + sortable amount.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">
              <button className="ml-auto inline-flex items-center gap-1 hover:text-foreground" onClick={() => setAsc((v) => !v)}>
                Amount <ArrowUpDown className="size-3.5" />
              </button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.invoice}>
              <TableCell className="font-medium">{r.invoice}</TableCell>
              <TableCell><Badge variant={badge(r.status)}>{r.status}</Badge></TableCell>
              <TableCell className="text-right tabular-nums">${r.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
          {rows.length === 0 && (
            <TableRow><TableCell colSpan={3} className="text-center text-muted-foreground">No matches.</TableCell></TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

const formSchema = z.object({
  username: z.string().min(2, "At least 2 characters.").max(20, "Too long."),
  email: z.string().email("Enter a valid email."),
  plan: z.string().min(1, "Pick a plan."),
})

function ValidatedForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", email: "", plan: "" },
  })
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((v) => toast.success("Submitted", { description: `${v.username} · ${v.email} · ${v.plan}` }))}
        className="grid max-w-md gap-5"
      >
        <FormField control={form.control} name="username" render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl><Input placeholder="daniel" {...field} /></FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="plan" render={({ field }) => (
          <FormItem>
            <FormLabel>Plan</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl><SelectTrigger><SelectValue placeholder="Choose a plan" /></SelectTrigger></FormControl>
              <SelectContent>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="pro">Pro</SelectItem>
                <SelectItem value="team">Team</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )} />
        <div className="flex gap-2">
          <Button type="submit">Create account</Button>
          <Button type="button" variant="ghost" onClick={() => form.reset()}>Reset</Button>
        </div>
      </form>
    </Form>
  )
}

/* ----------------------------- page ----------------------------- */

const NAV = [
  ["examples", "Examples"], ["blocks", "Blocks"], ["motion", "Motion"], ["blog", "Blog"], ["saas", "SaaS"], ["inputs", "Inputs"], ["selection", "Selection"], ["pickers", "Pickers"],
  ["overlays", "Overlays"], ["navigation", "Navigation"], ["feedback", "Feedback"],
  ["data", "Data"], ["form", "Form"],
] as const

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [progress, setProgress] = useState(20)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(2)
  const [otp, setOtp] = useState("")
  const [fontSize, setFontSize] = useState([16])

  useEffect(() => {
    const t = setInterval(() => setProgress((p) => (p >= 100 ? 20 : p + 20)), 1500)
    return () => clearInterval(t)
  }, [])

  return (
    <TooltipProvider>
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />

      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="size-7 rounded-md bg-foreground" />
            <span className="text-sm font-semibold tracking-tight">Monochrome UI</span>
            <Badge variant="secondary" className="hidden sm:inline-flex">56 components</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 text-muted-foreground" onClick={() => setPaletteOpen(true)}>
              <Search className="size-4" /> Search
              <Kbd>⌘K</Kbd>
            </Button>
            <ModeToggle />
          </div>
        </div>
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-2 text-sm">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="rounded-md px-3 py-1 text-muted-foreground hover:bg-accent hover:text-foreground">{label}</a>
          ))}
        </nav>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <FadeIn className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">Component Showcase</h1>
          <p className="mt-2 max-w-prose text-sm text-muted-foreground">
            A minimal, monochrome system on shadcn/ui · Radix · Tailwind v4. Everything below is live —
            open menus, run the command palette (⌘K / Ctrl+K), pick dates, sort the table, submit the form.
          </p>
        </FadeIn>

        <div className="space-y-12">
          <section id="examples" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">Examples — theme preview</h2>
              <Badge variant="outline">33 cards</Badge>
            </div>
            <ExamplesGallery />
          </section>

          <BlocksSection />
          <MotionSection />
          <BlogSection />
          <SaaSSection />

          <Section id="buttons" title="Buttons, groups & toggles">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
                <Button disabled><Spinner />Loading</Button>
                <Button size="icon"><ChevronRight /></Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <ButtonGroup>
                  <Button variant="outline">Day</Button>
                  <Button variant="outline">Week</Button>
                  <Button variant="outline">Month</Button>
                </ButtonGroup>
                <Toggle aria-label="Star"><Star /></Toggle>
                <ToggleGroup type="multiple" variant="outline">
                  <ToggleGroupItem value="b" aria-label="Bold"><Bold /></ToggleGroupItem>
                  <ToggleGroupItem value="i" aria-label="Italic"><Italic /></ToggleGroupItem>
                  <ToggleGroupItem value="u" aria-label="Underline"><Underline /></ToggleGroupItem>
                </ToggleGroup>
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <KbdRow />
              </div>
            </div>
          </Section>

          <Section id="inputs" title="Inputs">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Daniel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="srch">Search input group</Label>
                <InputGroup>
                  <InputGroupAddon><Search /></InputGroupAddon>
                  <InputGroupInput id="srch" placeholder="Search…" />
                </InputGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ns">Native select</Label>
                <NativeSelect id="ns" defaultValue="us">
                  <NativeSelectOption value="us">United States</NativeSelectOption>
                  <NativeSelectOption value="ca">Canada</NativeSelectOption>
                  <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
                </NativeSelect>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Select</Label>
                <Select>
                  <SelectTrigger id="role"><SelectValue placeholder="Select a role" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="bio">Message</Label>
                <Textarea id="bio" placeholder="Write something…" />
              </div>
            </div>
          </Section>

          <Section id="selection" title="Selection & sliders">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-center gap-2"><Checkbox id="t" defaultChecked /><Label htmlFor="t">Accept terms</Label></div>
              <div className="flex items-center gap-2"><Switch id="n" /><Label htmlFor="n">Email notifications</Label></div>
              <div className="space-y-2">
                <Label>Plan</Label>
                <RadioGroup defaultValue="pro" className="flex gap-4">
                  <div className="flex items-center gap-2"><RadioGroupItem value="free" id="f" /><Label htmlFor="f">Free</Label></div>
                  <div className="flex items-center gap-2"><RadioGroupItem value="pro" id="p" /><Label htmlFor="p">Pro</Label></div>
                  <div className="flex items-center gap-2"><RadioGroupItem value="team" id="tm" /><Label htmlFor="tm">Team</Label></div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between"><Label>Font size</Label><span className="text-sm tabular-nums text-muted-foreground">{fontSize[0]}px</span></div>
                <Slider value={fontSize} onValueChange={setFontSize} min={12} max={32} step={1} />
                <p style={{ fontSize: fontSize[0] }} className="text-muted-foreground">The quick brown fox.</p>
              </div>
            </div>
          </Section>

          <Section id="pickers" title="Pickers: combobox, date, command, OTP">
            <div className="flex flex-wrap items-end gap-6">
              <div className="space-y-2"><Label>Combobox</Label><div><ComboboxDemo /></div></div>
              <div className="space-y-2"><Label>Date picker</Label><div><DatePicker /></div></div>
              <div className="space-y-2">
                <Label>Command palette</Label>
                <div><Button variant="outline" className="gap-2" onClick={() => setPaletteOpen(true)}><CmdIcon className="size-4" />Open (⌘K)</Button></div>
              </div>
              <div className="space-y-2">
                <Label>One-time code</Label>
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} /><InputOTPSlot index={1} /><InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} /><InputOTPSlot index={4} /><InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
          </Section>

          <Section id="containers" title="Cards, items & empty state">
            <div className="grid gap-4 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Project Alpha</CardTitle>
                  <CardDescription>Updated 2 hours ago</CardDescription>
                  <CardAction><Button variant="ghost" size="icon"><Bell /></Button></CardAction>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Header, action, content, and footer regions.</CardContent>
                <CardFooter className="gap-2"><Button size="sm">Open</Button><Button size="sm" variant="outline">Archive</Button></CardFooter>
              </Card>
              <Card>
                <CardHeader><CardTitle>Members</CardTitle></CardHeader>
                <CardContent>
                  <ItemGroup>
                    <Item>
                      <ItemMedia><Avatar><AvatarFallback>DL</AvatarFallback></Avatar></ItemMedia>
                      <ItemContent><ItemTitle>Daniel L.</ItemTitle><ItemDescription>Owner</ItemDescription></ItemContent>
                      <ItemActions><Button size="sm" variant="ghost">Manage</Button></ItemActions>
                    </Item>
                    <Item>
                      <ItemMedia><Avatar><AvatarFallback>AK</AvatarFallback></Avatar></ItemMedia>
                      <ItemContent><ItemTitle>Alex K.</ItemTitle><ItemDescription>Editor</ItemDescription></ItemContent>
                      <ItemActions><Button size="sm" variant="ghost">Manage</Button></ItemActions>
                    </Item>
                  </ItemGroup>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Empty>
                    <EmptyHeader>
                      <EmptyMedia variant="icon"><Inbox /></EmptyMedia>
                      <EmptyTitle>No messages</EmptyTitle>
                      <EmptyDescription>You're all caught up.</EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent><Button size="sm" variant="outline">Refresh</Button></EmptyContent>
                  </Empty>
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section id="disclosure" title="Tabs, accordion & collapsible">
            <div className="grid gap-6 lg:grid-cols-3">
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="pt-3 text-sm text-muted-foreground">Overview content.</TabsContent>
                <TabsContent value="activity" className="pt-3 text-sm text-muted-foreground">Recent activity.</TabsContent>
              </Tabs>
              <Accordion type="single" collapsible>
                <AccordionItem value="a"><AccordionTrigger>Accessible?</AccordionTrigger><AccordionContent>Yes — Radix primitives.</AccordionContent></AccordionItem>
                <AccordionItem value="b"><AccordionTrigger>Themeable?</AccordionTrigger><AccordionContent>Yes — edit index.css tokens.</AccordionContent></AccordionItem>
              </Accordion>
              <Collapsible className="space-y-2">
                <CollapsibleTrigger asChild><Button variant="outline" className="w-full justify-between">Toggle details <ChevronsUpDown className="size-4" /></Button></CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 text-sm text-muted-foreground">
                  <p className="rounded-md border p-2">Hidden row one</p>
                  <p className="rounded-md border p-2">Hidden row two</p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </Section>

          <Section id="overlays" title="Overlays & menus">
            <div className="flex flex-wrap gap-3">
              <Dialog>
                <DialogTrigger asChild><Button variant="outline">Dialog</Button></DialogTrigger>
                <DialogContent>
                  <DialogHeader><DialogTitle>Edit profile</DialogTitle><DialogDescription>Make changes then save.</DialogDescription></DialogHeader>
                  <div className="grid gap-3 py-2">
                    <div className="space-y-2"><Label htmlFor="d1">Name</Label><Input id="d1" defaultValue="Daniel" /></div>
                  </div>
                  <DialogFooter><DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose><Button onClick={() => toast.success("Saved")}>Save</Button></DialogFooter>
                </DialogContent>
              </Dialog>

              <AlertDialog>
                <AlertDialogTrigger asChild><Button variant="outline"><Trash2 />Delete</Button></AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader><AlertDialogTitle>Are you sure?</AlertDialogTitle><AlertDialogDescription>This permanently deletes the item.</AlertDialogDescription></AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => toast.error("Deleted")}>Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Sheet>
                <SheetTrigger asChild><Button variant="outline">Sheet</Button></SheetTrigger>
                <SheetContent><SheetHeader><SheetTitle>Side panel</SheetTitle><SheetDescription>Slide-out content.</SheetDescription></SheetHeader></SheetContent>
              </Sheet>

              <Drawer>
                <DrawerTrigger asChild><Button variant="outline">Drawer</Button></DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader><DrawerTitle>Bottom drawer</DrawerTitle><DrawerDescription>Great for mobile actions.</DrawerDescription></DrawerHeader>
                  <DrawerFooter><Button onClick={() => toast("Confirmed")}>Confirm</Button><DrawerClose asChild><Button variant="outline">Close</Button></DrawerClose></DrawerFooter>
                </DrawerContent>
              </Drawer>

              <Popover>
                <PopoverTrigger asChild><Button variant="outline">Popover</Button></PopoverTrigger>
                <PopoverContent className="text-sm">Quick popover content.</PopoverContent>
              </Popover>

              <HoverCard>
                <HoverCardTrigger asChild><Button variant="link">@daniel</Button></HoverCardTrigger>
                <HoverCardContent className="text-sm">
                  <div className="flex gap-3"><Avatar><AvatarFallback>DL</AvatarFallback></Avatar><div><p className="font-medium">Daniel L.</p><p className="text-muted-foreground">Joined June 2026</p></div></div>
                </HoverCardContent>
              </HoverCard>

              <DropdownMenu>
                <DropdownMenuTrigger asChild><Button variant="outline">Dropdown</Button></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><User />Profile<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut></DropdownMenuItem>
                  <DropdownMenuItem><Settings />Settings</DropdownMenuItem>
                  <DropdownMenuItem variant="destructive"><LogOut />Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <ContextMenu>
                <ContextMenuTrigger className="flex h-10 items-center rounded-md border border-dashed px-4 text-sm text-muted-foreground">Right-click me</ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Back<ContextMenuShortcut>⌘[</ContextMenuShortcut></ContextMenuItem>
                  <ContextMenuItem>Forward<ContextMenuShortcut>⌘]</ContextMenuShortcut></ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Reload</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>

              <Button variant="outline" onClick={() => toast.success("Saved", { description: "Changes are live." })}>Toast</Button>
            </div>
          </Section>

          <Section id="navigation" title="Navigation">
            <div className="space-y-6">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New<MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
                    <MenubarItem>Open</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print<MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent><MenubarItem>Undo</MenubarItem><MenubarItem>Redo</MenubarItem></MenubarContent>
                </MenubarMenu>
              </Menubar>

              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbLink href="#">Projects</BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbPage>Alpha</BreadcrumbPage></BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <Pagination>
                <PaginationContent>
                  <PaginationItem><PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); setPage((p) => Math.max(1, p - 1)) }} /></PaginationItem>
                  {[1, 2, 3].map((n) => (
                    <PaginationItem key={n}><PaginationLink href="#" isActive={page === n} onClick={(e) => { e.preventDefault(); setPage(n) }}>{n}</PaginationLink></PaginationItem>
                  ))}
                  <PaginationItem><PaginationEllipsis /></PaginationItem>
                  <PaginationItem><PaginationNext href="#" onClick={(e) => { e.preventDefault(); setPage((p) => p + 1) }} /></PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </Section>

          <Section id="feedback" title="Feedback & status">
            <div className="space-y-5">
              <Alert>
                <Check />
                <AlertTitle>Heads up</AlertTitle>
                <AlertDescription>Your settings were saved successfully.</AlertDescription>
              </Alert>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm"><span className="text-muted-foreground">Auto-updating progress</span><span className="tabular-nums">{progress}%</span></div>
                <Progress value={progress} />
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1500) }}>
                  {loading ? <Spinner /> : null}{loading ? "Loading…" : "Simulate load"}
                </Button>
                {loading ? (
                  <div className="flex-1 space-y-2"><Skeleton className="h-4 w-3/4" /><Skeleton className="h-4 w-1/2" /></div>
                ) : (
                  <p className="text-sm text-muted-foreground">Content loaded.</p>
                )}
              </div>
            </div>
          </Section>

          <Section id="data" title="Data display">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <AvatarGroup>
                  <Avatar><AvatarImage src="" alt="" /><AvatarFallback>DL</AvatarFallback></Avatar>
                  <Avatar><AvatarFallback>AK</AvatarFallback></Avatar>
                  <Avatar><AvatarFallback>JS</AvatarFallback></Avatar>
                </AvatarGroup>
                <Separator orientation="vertical" className="h-8" />
                <span className="text-sm text-muted-foreground">Avatar group</span>
              </div>

              <DataTable />

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Bar chart</Label>
                  <ChartDemo />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Carousel</Label>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {[1, 2, 3, 4].map((n) => (
                        <CarouselItem key={n} className="md:basis-1/2">
                          <div className="flex h-28 items-center justify-center rounded-lg border bg-muted text-2xl font-semibold">{n}</div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" /><CarouselNext className="right-2" />
                  </Carousel>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Scroll area</Label>
                  <ScrollArea className="h-40 rounded-md border p-3">
                    <div className="space-y-2 text-sm">
                      {Array.from({ length: 18 }).map((_, i) => (<p key={i} className="text-muted-foreground">Log line #{i + 1}</p>))}
                    </div>
                  </ScrollArea>
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Resizable panels</Label>
                  <ResizablePanelGroup orientation="horizontal" className="h-40 rounded-md border">
                    <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center text-sm text-muted-foreground">Left</div></ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center text-sm text-muted-foreground">Right</div></ResizablePanel>
                  </ResizablePanelGroup>
                </div>
              </div>

              <div className="max-w-md space-y-2">
                <Label className="text-muted-foreground">Aspect ratio (16:9)</Label>
                <AspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
                  <div className="flex h-full items-center justify-center text-sm text-muted-foreground">16 / 9</div>
                </AspectRatio>
              </div>
            </div>
          </Section>

          <Section id="form" title="Validated form">
            <ValidatedForm />
          </Section>
        </div>

        <footer className="mt-16 border-t pt-6 text-xs text-muted-foreground">
          Monochrome UI · 56 components · shadcn/ui · Radix · Tailwind v4 · React 19
        </footer>
      </div>
      <Toaster />
    </TooltipProvider>
  )
}

function KbdRow() {
  return (
    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
      Press <Kbd>⌘</Kbd><Kbd>K</Kbd>
    </span>
  )
}
