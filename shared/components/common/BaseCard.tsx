import { cn } from "cn"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

interface BaseCardProps {
  title: string
  description?: string
  children: React.ReactNode
  cardClassName?: string
  headerClassName?: string
}

export const BaseCard = ({
  title,
  description,
  children,
  cardClassName,
  headerClassName,
}: BaseCardProps) => {
  return (
    <Card className={cardClassName}>
      <CardHeader className={cn("w-full h-full p-0", headerClassName)}>
        <CardTitle className="text-sm text-primary font-semibold">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-xs">{description}</CardDescription>
        )}
      </CardHeader>
      {children}
    </Card>
  )
}
