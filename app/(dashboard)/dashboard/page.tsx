import { METRICS, MetricCard } from "@/features/dashboard"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-3 p-4 md:p-4.5">
      <h1 className="text-sm font-bold text-primary">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4.25 sm:grid-cols-2 xl:grid-cols-4">
        {METRICS.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>
    </div>
  )
}
