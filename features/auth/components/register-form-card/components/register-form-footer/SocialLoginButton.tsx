interface SocialLoginButtonProps {
  provider: string
  icon: React.ReactNode
  onClick?: () => void
}

export function SocialLoginButton({
  provider,
  icon,
  onClick,
}: SocialLoginButtonProps) {
  return (
    <button
      type="button"
      aria-label={`Continuar con ${provider}`}
      onClick={onClick}
      className="group/button inline-flex h-8.5 w-8.5 shrink-0 cursor-pointer items-center justify-center rounded-[8px] border border-transparent bg-transparent p-0 text-sm font-medium whitespace-nowrap transition-all outline-none select-none hover:bg-muted/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px active:opacity-90"
    >
      <span className="flex items-center justify-center overflow-hidden rounded-[8px]">
        {icon}
      </span>
    </button>
  )
}
