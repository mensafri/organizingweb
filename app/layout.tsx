import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import Sidebar from "@/components/sidebar"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="flex">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Sidebar />
            <div className="w-full">
              <SiteHeader />
              <div className="flex">{children}</div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
