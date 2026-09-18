import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/shared/components/ui/sonner"
import { TooltipProvider } from "@/shared/components/ui/tooltip"
import "./globals.css"
import { cn } from "@/shared/utils/styles"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "LVL Consulting",
  description: "Plataforma de administración de LVL Consulting.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-PE" className={cn("h-full", "antialiased", inter.variable)}>
      <body className="min-h-full flex flex-col">
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
