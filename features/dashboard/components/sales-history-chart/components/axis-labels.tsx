import { CHART_HEIGHT, CHART_MARGIN_TOP } from "./../constants"

interface AxisLabelsProps {
  labels: string[]
  align?: "left" | "right"
}

export function AxisLabels({ labels, align = "left" }: AxisLabelsProps) {
  return (
    <div
      className="flex shrink-0 flex-col justify-between text-xs font-semibold"
      style={{
        height: CHART_HEIGHT,
        paddingTop: CHART_MARGIN_TOP,
        textAlign: align,
      }}
    >
      {labels.map((label) => (
        <span key={label}>{label}</span>
      ))}
    </div>
  )
}
