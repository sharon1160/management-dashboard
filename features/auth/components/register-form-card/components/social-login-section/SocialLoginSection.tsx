import { Separator } from "@/shared/components/ui/separator"
import { SocialLoginButton } from "./SocialLoginButton"
import { GoogleIcon } from "./icons/GoogleIcon"
import { FacebookIcon } from "./icons/FacebookIcon"
import { AdobeIcon } from "./icons/AdobeIcon"

export const SocialLoginSection = () => {
  return (
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
  )
}
