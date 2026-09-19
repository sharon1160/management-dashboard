import Image from "next/image"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select"
import type { Language } from "./types"

interface LanguageSelectorProps {
  languages: Language[]
  defaultValue: string
}

export function LanguageSelector({
  languages,
  defaultValue,
}: LanguageSelectorProps) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger
        size="sm"
        aria-label="Idioma"
        className="border-0 text-xs shadow-none cursor-pointer gap-2 *:data-[slot=select-value]:gap-2"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {languages.map(({ code, label, flagSrc }) => (
          <SelectItem
            key={code}
            value={code}
            className="text-xs cursor-pointer"
          >
            <Image src={flagSrc} alt="" width={22} height={16} />
            <span className="in-data-[slot=select-value]:hidden @2xl:in-data-[slot=select-value]:inline">
              {label}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
