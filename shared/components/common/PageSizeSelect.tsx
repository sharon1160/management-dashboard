import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select"

interface PageSizeSelectProps {
  value: number
  options: readonly number[]
  onChange: (size: number) => void
}

export const PageSizeSelect = ({
  value,
  options,
  onChange,
}: PageSizeSelectProps) => {
  return (
    <div className="flex items-center gap-3">
      <Select value={String(value)} onValueChange={(v) => onChange(Number(v))}>
        <SelectTrigger
          aria-label="Datos por página"
          size="sm"
          className="gap-5 p-2 text-xs"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((size) => (
            <SelectItem key={size} value={String(size)}>
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span className="text-xs">Datos por página</span>
    </div>
  )
}
