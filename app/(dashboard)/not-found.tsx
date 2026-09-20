import Link from "next/link"

import { Button } from "@/shared/components/ui/button"
import Image from "next/image"

export default function DashboardNotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="relative mb-2 h-48 w-80 flex justify-center">
        <Image
          src="/not-found.png"
          alt="LVL Consulting"
          fill
          className="object-contain"
        />
      </div>

      <h1 className="text-2xl font-semibold">Página no encontrada</h1>
      <p className="text-muted-foreground max-w-md text-sm">
        Aún estamos trabajando en esto.
      </p>
      <Button asChild>
        <Link href="/dashboard">Volver al dashboard</Link>
      </Button>
    </div>
  )
}
