export const CHART_MARGIN_TOP = 8

export const CHART_HEIGHT = 130 + CHART_MARGIN_TOP

export const Y_DOMAIN: [number, number] = [0, 100]

export const SALES_GRADIENT_HEIGHT_RATIO = 0.68

export const SALES_GRADIENT_STOPS = [
  { offset: "20%", color: "var(--chart-sales)", opacity: 0.9 },
  { offset: "81%", color: "var(--chart-sales)", opacity: 0 },
]

const [Y_MIN, Y_MAX] = Y_DOMAIN

export const LEFT_AXIS_TITLE = "Total libre (GB)"
export const RIGHT_AXIS_TITLE = "% Libre (GB)"

export const LEFT_AXIS_LABELS = [String(Y_MAX), String(Y_MIN)]
export const RIGHT_AXIS_LABELS = ["15%", "10%"]
