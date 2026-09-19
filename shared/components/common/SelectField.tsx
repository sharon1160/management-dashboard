import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import type { FormFieldControlProps } from "./FormField"

export interface SelectOption {
  value: string
  label: string
}

interface SelectFieldProps extends Partial<FormFieldControlProps> {
  value: string
  options: readonly SelectOption[]
  placeholder: string
  onChange: (value: string) => void
}

export const SelectField = ({
  value,
  options,
  placeholder,
  onChange,
  ...controlProps
}: SelectFieldProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        {...controlProps}
        className="w-full cursor-pointer text-xs data-[size=default]:h-8"
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent position="popper">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="text-xs"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
