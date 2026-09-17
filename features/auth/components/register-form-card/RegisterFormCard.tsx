import { BaseCard } from "@/shared/components/common/BaseCard"
import { RegisterFormFooter } from "./components/register-form-footer/RegisterFormFooter"
import { buttonVariants } from "@/shared/components/ui/button"
import Link from "next/link"
import { cn } from "@/shared/utils/styles"
import { RegisterFormContent } from "./components/RegisterFormContent"

export const RegisterFormCard = () => {
  return (
    <BaseCard
      title="Crear cuenta"
      description="Únete a la comunidad de LVL Consulting"
      cardClassName="p-8 flex flex-col items-center gap-0 w-96"
      headerClassName="flex flex-col items-center text-center gap-3 mb-4"
      footer={<RegisterFormFooter />}
    >
      <div className="mb-6">
        <RegisterFormContent />
        <span className="text-xs text-muted-foreground">
          Al registrarte aceptas los{" "}
          <Link
            href="/terminos"
            className={cn(
              buttonVariants({ variant: "link" }),
              "h-auto p-0 text-xs underline inline whitespace-normal",
            )}
          >
            Términos de uso de LVL Consulting
          </Link>
        </span>
      </div>
    </BaseCard>
  )
}
