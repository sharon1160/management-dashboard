import { cn } from "cn"

interface SectionTitleProps {
  as?: "h1" | "h2"
  className?: string
  children: React.ReactNode
}

export const SectionTitle = ({
  as: Tag = "h2",
  className,
  children,
}: SectionTitleProps) => {
  return (
    <Tag className={cn("text-sm font-bold text-primary", className)}>
      {children}
    </Tag>
  )
}
