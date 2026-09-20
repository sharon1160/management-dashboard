"use client"

import {
  useFormContext,
  type FieldPathByValue,
  type FieldValues,
} from "react-hook-form"

import { Input } from "../ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../ui/input-group"
import { FormField } from "./FormField"

export interface FormInputFieldProps<T extends FieldValues> {
  name: FieldPathByValue<T, string>
  label: string
  hideLabel?: boolean
  placeholder: string
  prefix?: string
  required?: boolean
  className?: string
  inputClassName?: string
}

export function FormInputField<T extends FieldValues>({
  name,
  label,
  hideLabel,
  placeholder,
  prefix,
  required,
  className,
  inputClassName,
}: FormInputFieldProps<T>) {
  const { register, getFieldState, formState } = useFormContext<T>()
  const { error } = getFieldState(name, formState)

  return (
    <FormField
      label={label}
      hideLabel={hideLabel}
      required={required}
      error={error?.message}
      className={className}
    >
      {(controlProps) => {
        const inputProps = {
          ...controlProps,
          className: inputClassName,
          placeholder,
          ...register(name),
        }

        return prefix ? (
          <InputGroup className="has-[>[data-align=inline-start]]:[&>input]:pl-0.5">
            <InputGroupAddon>
              <InputGroupText className="text-xs font-semibold text-foreground">
                {prefix}
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput {...inputProps} />
          </InputGroup>
        ) : (
          <Input {...inputProps} />
        )
      }}
    </FormField>
  )
}
