import { cn } from "cn"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

interface BaseCardProps {
  title: string
  description?: string
  children: React.ReactNode
  footer: React.ReactNode
  cardClassName?: string
  headerClassName?: string
}

export const BaseCard = ({
  title,
  description,
  footer,
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
      <CardContent>{children}</CardContent>
      <CardFooter className="w-full p-0">{footer}</CardFooter>
    </Card>
  )
}
