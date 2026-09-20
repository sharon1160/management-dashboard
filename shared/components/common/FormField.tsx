import { cn } from "cn"
import { useId } from "react"

import { Label } from "../ui/label"

export interface FormFieldControlProps {
  id: string
  "aria-invalid": boolean
  "aria-required"?: boolean
  "aria-describedby"?: string
}

interface FormFieldProps {
  label: string
  hideLabel?: boolean
  required?: boolean
  error?: string
  className?: string
  children: (controlProps: FormFieldControlProps) => React.ReactNode
}

export const FormField = ({
  label,
  hideLabel,
  required,
  error,
  className,
  children,
}: FormFieldProps) => {
  const id = useId()
  const errorId = `${id}-error`

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label
        htmlFor={id}
        className={cn("gap-0 text-xs", hideLabel && "sr-only")}
      >
        {label}
        {required && (
          <span aria-hidden className="text-destructive-foreground">
            *
          </span>
        )}
      </Label>
      {children({
        id,
        "aria-invalid": !!error,
        "aria-required": required,
        "aria-describedby": error ? errorId : undefined,
      })}
      {error && (
        <span
          id={errorId}
          role="alert"
          className="text-xs text-destructive-foreground"
        >
          {error}
        </span>
      )}
    </div>
  )
}
