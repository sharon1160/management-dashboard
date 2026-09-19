import { capitalize } from "@/shared/utils/strings"

/** Formats a date's weekday as "Lunes". */
export function formatWeekday(date: Date, locale: string): string {
  return capitalize(
    new Intl.DateTimeFormat(locale, { weekday: "long" }).format(date),
  )
}

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

const pad2 = (value: number) => String(value).padStart(2, "0")

export function formatShortDateTime(iso: string): string {
  const date = new Date(iso)
  const day = pad2(date.getDate())
  const month = pad2(date.getMonth() + 1)
  const year = pad2(date.getFullYear() % 100)
  const time = `${date.getHours()}:${pad2(date.getMinutes())}`

  return `${day}/${month}/${year} - ${time} hrs.`
}
