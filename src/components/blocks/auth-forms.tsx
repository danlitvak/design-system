"use client"

import { Code2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function LoginForm() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="cn-font-heading text-xl">Welcome back</CardTitle>
        <CardDescription>Sign in to your account to continue.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button variant="outline" className="w-full"><Code2 /> Continue with GitHub</Button>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <Separator className="flex-1" /> OR <Separator className="flex-1" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="login-email">Email</Label>
          <Input id="login-email" type="email" placeholder="you@example.com" />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="login-password">Password</Label>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Forgot?</a>
          </div>
          <Input id="login-password" type="password" placeholder="••••••••" />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <Button className="w-full">Sign in</Button>
        <p className="text-center text-sm text-muted-foreground">
          No account? <a href="#" className="text-foreground underline-offset-4 hover:underline">Sign up</a>
        </p>
      </CardFooter>
    </Card>
  )
}

export function SignupForm() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="cn-font-heading text-xl">Create your account</CardTitle>
        <CardDescription>Start building in under a minute.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="grid gap-2"><Label htmlFor="su-first">First name</Label><Input id="su-first" placeholder="Jane" /></div>
          <div className="grid gap-2"><Label htmlFor="su-last">Last name</Label><Input id="su-last" placeholder="Doe" /></div>
        </div>
        <div className="grid gap-2"><Label htmlFor="su-email">Email</Label><Input id="su-email" type="email" placeholder="jane@example.com" /></div>
        <div className="grid gap-2"><Label htmlFor="su-password">Password</Label><Input id="su-password" type="password" placeholder="••••••••" /></div>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <Button className="w-full">Create account</Button>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account? <a href="#" className="text-foreground underline-offset-4 hover:underline">Sign in</a>
        </p>
      </CardFooter>
    </Card>
  )
}
