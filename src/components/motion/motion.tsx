"use client"

import * as React from "react"
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion"

import { cn } from "@/lib/utils"

type Dir = "up" | "down" | "left" | "right" | "none"

function offset(dir: Dir, d: number) {
  switch (dir) {
    case "up": return { y: d }
    case "down": return { y: -d }
    case "left": return { x: d }
    case "right": return { x: -d }
    default: return {}
  }
}

/** Fade + slide in on mount. */
export function FadeIn({
  children,
  className,
  direction = "up",
  distance = 16,
  delay = 0,
  duration = 0.5,
  once = false,
}: {
  children: React.ReactNode
  className?: string
  direction?: Dir
  distance?: number
  delay?: number
  duration?: number
  once?: boolean
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: "-60px" })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset(direction, distance) }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset(direction, distance) }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

/** Fade + slide in when scrolled into view. */
export function Reveal({
  children,
  className,
  direction = "up",
  distance = 24,
  delay = 0,
  duration = 0.6,
  once = false,
}: {
  children: React.ReactNode
  className?: string
  direction?: Dir
  distance?: number
  delay?: number
  duration?: number
  once?: boolean
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset(direction, distance) }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset(direction, distance) }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
}

/** Reveals children one after another when scrolled into view. */
export function Stagger({
  children,
  className,
  once = false,
}: {
  children: React.ReactNode
  className?: string
  once?: boolean
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerParent}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  )
}

/** Counts up to `value` when scrolled into view. */
export function AnimatedCounter({
  value,
  className,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number
  className?: string
  prefix?: string
  suffix?: string
  decimals?: number
}) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: false, margin: "-40px" })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { duration: 1200, bounce: 0 })
  const [display, setDisplay] = React.useState("0")

  React.useEffect(() => {
    mv.set(inView ? value : 0)
  }, [inView, value, mv])

  React.useEffect(() => {
    return spring.on("change", (v) => {
      setDisplay(v.toFixed(decimals))
    })
  }, [spring, decimals])

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  )
}

/** Infinite horizontal marquee. */
export function Marquee({
  children,
  className,
  speed = 30,
  reverse = false,
}: {
  children: React.ReactNode
  className?: string
  speed?: number
  reverse?: boolean
}) {
  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      <motion.div
        className="flex shrink-0 gap-8 pr-8"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
