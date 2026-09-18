import { capitalize } from "@/shared/utils/strings"

/** Formats a date as "Monday, April 15, 2024". */
export function formatLongDate(date: Date, locale: string): string {
  const parts = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).formatToParts(date)

  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? ""

  return `${capitalize(part("weekday"))}, ${part("day")} de ${part("month")}, ${part("year")}`
}
