"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Send } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"

const schema = z.object({
  name: z.string().min(2, "Your name, please."),
  email: z.string().email("Enter a valid email."),
  message: z.string().min(10, "A little more detail helps."),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  })
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((v) => {
          toast.success("Message sent", { description: `Thanks, ${v.name} — I'll reply soon.` })
          form.reset()
        })}
        className="grid gap-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Jane Doe" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="jane@example.com" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
        </div>
        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea rows={4} placeholder="Tell me about your project…" {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <Button type="submit" className="w-fit">Send message <Send /></Button>
      </form>
    </Form>
  )
}
