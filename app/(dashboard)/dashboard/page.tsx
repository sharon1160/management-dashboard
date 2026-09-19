import {
  METRICS,
  MetricCard,
  SALES_HISTORY,
  SalesHistoryChart,
} from "@/features/dashboard"
import { SectionTitle } from "@/shared/components/common/SectionTitle"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-3 p-4 md:p-4.5">
      <SectionTitle as="h1">Dashboard</SectionTitle>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4.25 sm:grid-cols-2 xl:grid-cols-4">
          {METRICS.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <SectionTitle>Historial de ventas</SectionTitle>
          <SalesHistoryChart data={SALES_HISTORY} />
        </div>
      </div>
    </div>
  )
}
