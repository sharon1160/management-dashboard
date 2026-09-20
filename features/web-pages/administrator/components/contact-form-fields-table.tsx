import { useWatch } from "react-hook-form"

import { FormCheckbox } from "@/shared/components/common/FormCheckbox"
import { FormSwitch } from "@/shared/components/common/FormSwitch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table"

import { CONTACT_FORM_FIELD_LABELS } from "../data"
import type { ContactFormValues } from "../schemas/contact-form.schema"

const CheckboxField = FormCheckbox<ContactFormValues>
const SwitchField = FormSwitch<ContactFormValues>

export function ContactFormFieldsTable() {
  const fields = useWatch<ContactFormValues, "fields">({ name: "fields" })

  return (
    <Table className="table-fixed" containerClassName="overflow-x-visible">
      <TableHeader className="[&_th]:h-auto [&_tr]:border-0">
        <TableRow className="text-xs hover:bg-transparent">
          <TableHead className="w-1/3 px-0">Campo</TableHead>
          <TableHead className="w-1/3 text-center">Mostrar</TableHead>
          <TableHead className="text-right">Obligatorio</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="[&_td]:py-1.5 [&_tr]:border-0 [&_tr:first-child>td]:pt-2">
        {fields.map(({ id }, index) => {
          const label = CONTACT_FORM_FIELD_LABELS[id]

          return (
            <TableRow key={id} className="text-[11px] hover:bg-transparent">
              <TableCell className="px-0">{label}</TableCell>
              <TableCell>
                <CheckboxField
                  name={`fields.${index}.visible`}
                  label={`Mostrar ${label}`}
                  className="mx-auto -translate-x-2"
                />
              </TableCell>
              <TableCell className="pr-6 text-right">
                <SwitchField
                  name={`fields.${index}.required`}
                  label={`${label} obligatorio`}
                />
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
