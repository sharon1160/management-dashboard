"use client"

import {
  useFormContext,
  type FieldPathByValue,
  type FieldValues,
} from "react-hook-form"

import { Input } from "../ui/input"
import { FormField } from "./FormField"

interface FormInputFieldProps<T extends FieldValues> {
  name: FieldPathByValue<T, string>
  label: string
  placeholder: string
  required?: boolean
  className?: string
}

export function FormInputField<T extends FieldValues>({
  name,
  label,
  placeholder,
  required,
  className,
}: FormInputFieldProps<T>) {
  const { register, getFieldState, formState } = useFormContext<T>()
  const { error } = getFieldState(name, formState)

  return (
    <FormField
      label={label}
      required={required}
      error={error?.message}
      className={className}
    >
      {(controlProps) => (
        <Input
          {...controlProps}
          placeholder={placeholder}
          {...register(name)}
        />
      )}
    </FormField>
  )
}
