"use client"

import {
  Controller,
  useFormContext,
  type FieldPathByValue,
  type FieldValues,
} from "react-hook-form"

import { Checkbox } from "../ui/checkbox"

interface FormCheckboxProps<T extends FieldValues> {
  name: FieldPathByValue<T, boolean>
  label: string
  className?: string
}

export function FormCheckbox<T extends FieldValues>({
  name,
  label,
  className,
}: FormCheckboxProps<T>) {
  const { control } = useFormContext<T>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Checkbox
          aria-label={label}
          className={className}
          checked={field.value}
          onCheckedChange={(checked) => field.onChange(checked === true)}
          onBlur={field.onBlur}
        />
      )}
    />
  )
}
