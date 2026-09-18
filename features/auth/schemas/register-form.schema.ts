import { z } from "zod"

export const registerFormSchema = z.object({
  email: z
    .string()
    .min(1, "El correo electrónico es obligatorio")
    .pipe(z.email("Ingresa un correo electrónico válido")),
  username: z
    .string()
    .min(1, "El nombre de usuario es obligatorio")
    .min(3, "Debe tener al menos 3 caracteres"),
  password: z
    .string()
    .min(1, "La contraseña es obligatoria")
    .min(8, "Debe tener al menos 8 caracteres"),
})

export type RegisterFormValues = z.infer<typeof registerFormSchema>
