"use client"

import { APP_LOCALE } from "@/shared/constants/locale"
import { useClientValue } from "@/shared/hooks/use-client-value"
import { formatLongDate } from "@/shared/utils/dates"

const getTodayLabel = () => formatLongDate(new Date(), APP_LOCALE)

interface HeaderGreetingProps {
  userName: string
}

export function HeaderGreeting({ userName }: HeaderGreetingProps) {
  const date = useClientValue(getTodayLabel, "")

  return (
    <div className="flex min-w-0 flex-col gap-1">
      <p className="truncate text-sm font-medium">
        ¡Te damos la bienvenida {userName}!
      </p>
      <p className="hidden truncate text-xs @md:block">{date}</p>
    </div>
  )
}
