"use client"

import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import type { RegisterFormValues } from "../../../schemas/register-form.schema"

export const RegisterFormContent = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    formState: { errors },
  } = useFormContext<RegisterFormValues>()

  return (
    <div className="flex flex-col gap-4.5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-xs gap-0">
          Correo electrónico
          <span className="text-destructive-foreground">*</span>
        </Label>
        <div className="flex flex-col gap-1">
          <Input
            id="email"
            type="email"
            placeholder="Introducir la dirección del correo electrónico"
            className="rounded-sm"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xs text-destructive-foreground">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="username" className="text-xs gap-0">
          Nombre del usuario
          <span className="text-destructive-foreground">*</span>
        </Label>
        <div className="flex flex-col gap-1">
          <Input
            id="username"
            type="text"
            placeholder="Introducir nombre del usuario"
            className="rounded-sm"
            aria-invalid={!!errors.username}
            {...register("username")}
          />
          {errors.username && (
            <span className="text-xs text-destructive-foreground">
              {errors.username.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password" className="text-xs gap-0">
          Contraseña
          <span className="text-destructive-foreground">*</span>
        </Label>
        <div className="flex flex-col gap-1">
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Introducir la contraseña"
              className="rounded-sm pr-10"
              aria-invalid={!!errors.password}
              {...register("password")}
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
          {errors.password && (
            <span className="text-xs text-destructive-foreground">
              {errors.password.message}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
