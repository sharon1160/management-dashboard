"use client"

import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { BaseCard } from "@/shared/components/common/BaseCard"
import { CardContent, CardFooter } from "@/shared/components/ui/card"
import { Button, buttonVariants } from "@/shared/components/ui/button"
import Link from "next/link"
import { cn } from "@/shared/utils/styles"
import { RegisterFormContent } from "./components/RegisterFormContent"
import { SocialLoginSection } from "./components/social-login-section/SocialLoginSection"
import {
  registerFormSchema,
  type RegisterFormValues,
} from "../../schemas/register-form.schema"

const SIMULATED_REGISTER_DELAY_MS = 1500

export const RegisterFormCard = () => {
  const router = useRouter()
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: { email: "", username: "", password: "" },
  })

  const onSubmit = async (_values: RegisterFormValues) => {
    try {
      // TODO: replace with the real register mutation once the backend is ready
      await new Promise((resolve) =>
        setTimeout(resolve, SIMULATED_REGISTER_DELAY_MS),
      )
      router.push("/dashboard")
    } catch (error) {
      console.error("Error creating account:", error)
      toast.error("Hubo un error al crear la cuenta")
    }
  }

  return (
    <BaseCard
      title="Crear cuenta"
      description="Únete a la comunidad de LVL Consulting"
      cardClassName="p-8 flex flex-col items-center gap-0 w-96"
      headerClassName="flex flex-col items-center text-center gap-3 mb-4"
    >
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="contents">
          <CardContent className="p-0">
            <div className="flex flex-col gap-4 mb-6">
              <RegisterFormContent />
              <span className="text-xs text-muted-foreground">
                Al registrarte aceptas los{" "}
                <Link
                  href="/terms-of-use"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "h-auto p-0 text-xs underline underline-offset-[3px] inline whitespace-normal",
                  )}
                >
                  Términos de uso de LVL Consulting
                </Link>
              </span>
            </div>
          </CardContent>
          <CardFooter className="w-full p-0 flex flex-col items-center gap-5.5">
            <Button
              className="h-8.5 w-full text-xs"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                "Registrarse"
              )}
            </Button>
            <SocialLoginSection />
          </CardFooter>
        </form>
      </FormProvider>
    </BaseCard>
  )
}
