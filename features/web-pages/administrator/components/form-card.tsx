import { Card, CardContent } from "@/shared/components/ui/card"

interface FormCardProps {
  className?: string
  children: React.ReactNode
}

export function FormCard({ className, children }: FormCardProps) {
  return (
    <Card className={className}>
      <CardContent className="flex-1 gap-4 px-4.5 lg:min-h-0">
        {children}
      </CardContent>
    </Card>
  )
}
