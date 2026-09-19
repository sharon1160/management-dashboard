"use client"

import {
  Controller,
  useFormContext,
  type FieldPathByValue,
  type FieldValues,
} from "react-hook-form"

import { FormField } from "./FormField"
import { SelectField, type SelectOption } from "./SelectField"

interface FormSelectFieldProps<T extends FieldValues> {
  name: FieldPathByValue<T, string>
  label: string
  options: readonly SelectOption[]
  placeholder: string
  required?: boolean
  className?: string
}

export function FormSelectField<T extends FieldValues>({
  name,
  label,
  options,
  placeholder,
  required,
  className,
}: FormSelectFieldProps<T>) {
  const { control } = useFormContext<T>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormField
          label={label}
          required={required}
          error={fieldState.error?.message}
          className={className}
        >
          {(controlProps) => (
            <SelectField
              {...controlProps}
              value={field.value}
              options={options}
              placeholder={placeholder}
              onChange={field.onChange}
            />
          )}
        </FormField>
      )}
    />
  )
}
