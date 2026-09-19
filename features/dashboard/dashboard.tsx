import { Section } from "@/shared/components/common/Section"
import { SectionTitle } from "@/shared/components/common/SectionTitle"

import { MetricCard } from "./components/metric-card"
import { ReferralsCard } from "./components/referrals-card"
import { SalesBreakdownCard } from "./components/sales-breakdown-card"
import { SalesHistoryChart } from "./components/sales-history-chart"
import { METRICS, REFERRALS, SALES_BREAKDOWN, SALES_HISTORY } from "./data"

export function Dashboard() {
  return (
    <div className="flex flex-col gap-3 p-4 md:p-4.5">
      <SectionTitle as="h1">Dashboard</SectionTitle>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4.25 sm:grid-cols-2 xl:grid-cols-4">
          {METRICS.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
        <Section title="Historial de ventas">
          <SalesHistoryChart data={SALES_HISTORY} />
        </Section>
        <div className="grid grid-cols-1 gap-4.25 lg:grid-cols-2">
          <Section title="Historial de ventas">
            <SalesBreakdownCard data={SALES_BREAKDOWN} />
          </Section>
          <Section title="Historial de ventas">
            <ReferralsCard referrals={REFERRALS} />
          </Section>
        </div>
      </div>
    </div>
  )
}
