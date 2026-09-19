import { Card, CardContent } from "@/shared/components/ui/card"
import { cn } from "@/shared/utils/styles"

interface DashboardCardProps {
  className?: string
  children: React.ReactNode
}

export function DashboardCard({ className, children }: DashboardCardProps) {
  return (
    <Card className="flex-1 py-6.25">
      <CardContent className={cn("flex-1 px-4.5", className)}>
        {children}
      </CardContent>
    </Card>
  )
}
