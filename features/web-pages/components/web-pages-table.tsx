import { Checkbox } from "@/shared/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table"

import type { CheckedState, WebPage } from "../types"
import { WebPageRow } from "./web-page-row"

/** Divider that skips the checkbox and number columns as in the design */
const INSET_DIVIDER = "[&>:nth-child(n+3)]:border-b"

interface WebPagesTableProps {
  rows: WebPage[]
  startNumber: number
  selected: ReadonlySet<string>
  headerChecked: CheckedState
  onSelectRow: (id: string, checked: boolean) => void
  onSelectAll: (checked: boolean) => void
}

export function WebPagesTable({
  rows,
  startNumber,
  selected,
  headerChecked,
  onSelectRow,
  onSelectAll,
}: WebPagesTableProps) {
  return (
    <Table
      containerClassName="flex-1"
      className="min-w-240 table-fixed border-separate border-spacing-0"
    >
      <TableHeader className="sticky top-0 z-10 bg-card text-xs">
        <TableRow
          className={`${INSET_DIVIDER} [&>th]:h-12.5 md:[&>th]:h-15 [&>th]:font-semibold`}
        >
          <TableHead className="w-10 pl-4.75 md:w-12">
            <Checkbox
              className="size-5"
              aria-label="Seleccionar todos"
              checked={headerChecked}
              onCheckedChange={(checked) => onSelectAll(checked === true)}
            />
          </TableHead>
          <TableHead className="w-10 text-center md:w-14">N°</TableHead>
          <TableHead className="w-45 pl-3.5">Categoría</TableHead>
          <TableHead>Descripción</TableHead>
          <TableHead className="w-34">Fecha</TableHead>
          <TableHead className="w-26 text-center">Categoría</TableHead>
          <TableHead className="w-33 pr-7.5 text-center">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-[11px] [&_tr:last-child>td]:border-b-0">
        {rows.map((row, index) => (
          <WebPageRow
            key={row.id}
            className={INSET_DIVIDER}
            row={row}
            number={startNumber + index}
            isSelected={selected.has(row.id)}
            onSelect={onSelectRow}
          />
        ))}
      </TableBody>
    </Table>
  )
}
