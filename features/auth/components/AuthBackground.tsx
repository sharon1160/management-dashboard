import Image from "next/image"

export const AuthBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/auth-background.svg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[#222222]/50" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
