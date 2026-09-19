import { usePlotArea } from "recharts"

import { SALES_GRADIENT_HEIGHT_RATIO, SALES_GRADIENT_STOPS } from "../constants"

interface SalesGradientProps {
  id: string
}

export function SalesGradient({ id }: SalesGradientProps) {
  const plotArea = usePlotArea()

  if (!plotArea) return null

  const { y, height } = plotArea

  return (
    <defs>
      <linearGradient
        id={id}
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={y}
        x2={0}
        y2={y + height * SALES_GRADIENT_HEIGHT_RATIO}
      >
        {SALES_GRADIENT_STOPS.map(({ offset, color, opacity }) => (
          <stop
            key={offset}
            offset={offset}
            stopColor={color}
            stopOpacity={opacity}
          />
        ))}
      </linearGradient>
    </defs>
  )
}
