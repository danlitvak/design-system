import * as React from "react"

/** Minimal stand-in for the builder's nuqs-backed search params. */
export function useDesignSystemSearchParams() {
  return React.useState({
    iconLibrary: "lucide" as const,
    font: "inter",
    fontHeading: "jetbrains-mono",
    style: "lyra",
  })
}
