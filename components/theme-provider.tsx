"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const {theme} = useTheme()
  const [mounted,setMount] = React.useState(false)

  React.useEffect(()=>{
    setMount(true)
  },[])
  if(!mounted)return null
  return <NextThemesProvider key={theme} {...props}>{children}</NextThemesProvider>
}