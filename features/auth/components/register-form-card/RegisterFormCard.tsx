"use client"

import { BaseCard } from "@/shared/components/common/BaseCard"
import { CardContent, CardFooter } from "@/shared/components/ui/card"
import { Button, buttonVariants } from "@/shared/components/ui/button"
import Link from "next/link"
import { cn } from "@/shared/utils/styles"
import { RegisterFormContent } from "./components/RegisterFormContent"
import { SocialLoginSection } from "./components/social-login-section/SocialLoginSection"

export const RegisterFormCard = () => {
  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    // TODO: read form values via FormData(event.currentTarget) and connect to register mutation
  }

  return (
    <BaseCard
      title="Crear cuenta"
      description="Únete a la comunidad de LVL Consulting"
      cardClassName="p-8 flex flex-col items-center gap-0 w-96"
      headerClassName="flex flex-col items-center text-center gap-3 mb-4"
    >
      <form onSubmit={handleSubmit} className="contents">
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
          <Button className="h-8.5 w-full text-xs">Registrarse</Button>
          <SocialLoginSection />
        </CardFooter>
      </form>
    </BaseCard>
  )
}
