"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"

export const RegisterFormContent = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col gap-4.5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-xs gap-0">
          Correo electrónico
          <span className="text-destructive-foreground">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Introducir la dirección del correo electrónico"
          className="rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="username" className="text-xs gap-0">
          Nombre del usuario
          <span className="text-destructive-foreground">*</span>
        </Label>
        <Input
          id="username"
          name="username"
          type="text"
          required
          placeholder="Introducir nombre del usuario"
          className="rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password" className="text-xs">
          Contraseña
        </Label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Introducir la contraseña"
            className="rounded-sm pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={
              showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
            }
            className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
