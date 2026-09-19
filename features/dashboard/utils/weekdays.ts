import { APP_LOCALE } from "@/shared/constants/locale"
import { formatWeekday } from "@/shared/utils/dates"

import type { SalesHistoryPoint } from "../types"

/** Unique weekday names in data order, e.g. ["Lunes", "Martes", ...] */
export function getWeekdayLabels(data: SalesHistoryPoint[]): string[] {
  const weekdays = data.map(({ date }) =>
    formatWeekday(new Date(date), APP_LOCALE),
  )

  return [...new Set(weekdays)]
}
