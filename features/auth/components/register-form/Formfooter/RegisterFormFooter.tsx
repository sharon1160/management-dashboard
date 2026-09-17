import { Button } from "@/shared/components/ui/button"
import { Separator } from "@/shared/components/ui/separator"
import { SocialLoginButton } from "./SocialLoginButton"
import { GoogleIcon } from "./icons/GoogleIcon"
import { AdobeIcon } from "./icons/AdobeIcon"
import { FacebookIcon } from "./icons/FacebookIcon"

export const RegisterFormFooter = () => {
  return (
    <div className="flex flex-col items-center w-full gap-8">
      <Button className="w-full">Registrarse</Button>
      <div className="flex flex-col items-center w-full gap-4">
        <div className="flex items-center gap-4 w-full">
          <Separator className="flex-1 bg-muted-foreground/70" />
          <span className="text-xs">Crea cuenta con</span>
          <Separator className="flex-1 bg-muted-foreground/70" />
        </div>
        <div className="flex gap-4">
          <SocialLoginButton
            provider="Google"
            icon={<GoogleIcon className="size-full" />}
          />
          <SocialLoginButton
            provider="Facebook"
            icon={<FacebookIcon className="size-full" />}
          />
          <SocialLoginButton
            provider="Adobe"
            icon={<AdobeIcon className="size-full" />}
          />
        </div>
      </div>
    </div>
  )
}
