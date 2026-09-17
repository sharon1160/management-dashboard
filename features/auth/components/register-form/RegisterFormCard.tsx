import { BaseCard } from "@/shared/components/common/BaseCard"
import { RegisterFormFooter } from "./Formfooter/RegisterFormFooter"

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
        <p>Register Form Content</p>
      </div>
    </BaseCard>
  )
}
