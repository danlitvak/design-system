"use client"

import * as React from "react"
import * as Lucide from "lucide-react"

type LucideComp = React.ComponentType<React.ComponentProps<"svg">>

type Props = {
  lucide?: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
  remixicon?: string
} & React.ComponentProps<"svg">

/**
 * Standalone replacement for the shadcn builder's IconPlaceholder.
 * The builder swaps between five icon libraries; here we always render
 * the Lucide icon named in the `lucide` prop and ignore the rest.
 */
export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}: Props) {
  void tabler
  void hugeicons
  void phosphor
  void remixicon
  const icons = Lucide as unknown as Record<string, LucideComp | undefined>
  const Cmp = (lucide && icons[lucide]) || Lucide.SquareIcon
  return <Cmp {...props} />
}
