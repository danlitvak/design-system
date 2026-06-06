import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Themed long-form typography for blog posts, docs, and CMS rich text
 * (Sanity portable-text, MDX, etc.). Wrap rendered HTML/markdown children.
 * No Tailwind typography plugin required — styles map to your design tokens.
 */
export function Prose({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "max-w-prose text-base leading-7 text-foreground",
        "[&_h1]:cn-font-heading [&_h1]:mt-0 [&_h1]:mb-4 [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:tracking-tight",
        "[&_h2]:cn-font-heading [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight",
        "[&_h3]:cn-font-heading [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-semibold",
        "[&_p]:my-4 [&_p]:text-muted-foreground",
        "[&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4",
        "[&_strong]:font-semibold [&_strong]:text-foreground",
        "[&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_ul>li]:mt-2",
        "[&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-muted-foreground [&_ol>li]:mt-2",
        "[&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:text-muted-foreground [&_blockquote]:italic",
        "[&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm",
        "[&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:bg-muted [&_pre]:p-4 [&_pre]:text-sm [&_pre_code]:bg-transparent [&_pre_code]:p-0",
        "[&_img]:my-6 [&_img]:rounded-lg [&_img]:border",
        "[&_hr]:my-8 [&_hr]:border-border",
        "[&_table]:my-6 [&_table]:w-full [&_table]:text-sm [&_th]:border-b [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_td]:border-b [&_td]:px-3 [&_td]:py-2",
        className
      )}
      {...props}
    />
  )
}
