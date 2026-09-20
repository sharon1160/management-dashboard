"use client"

import {
  Controller,
  useFormContext,
  type FieldPathByValue,
  type FieldValues,
} from "react-hook-form"

import { Switch } from "../ui/switch"

interface FormSwitchProps<T extends FieldValues> {
  name: FieldPathByValue<T, boolean>
  label: string
}

export function FormSwitch<T extends FieldValues>({
  name,
  label,
}: FormSwitchProps<T>) {
  const { control } = useFormContext<T>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Switch
          aria-label={label}
          checked={field.value}
          onCheckedChange={field.onChange}
          onBlur={field.onBlur}
        />
      )}
    />
  )
}
