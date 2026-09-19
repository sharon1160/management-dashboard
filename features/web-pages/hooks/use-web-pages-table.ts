import { usePagination } from "@/shared/hooks/use-pagination"

import { DEFAULT_PAGE_SIZE } from "../constants"
import type { CheckedState, WebPage } from "../types"
import { useRowSelection } from "./use-row-selection"

export function useWebPagesTable(data: WebPage[]) {
  const pagination = usePagination({
    items: data,
    initialPageSize: DEFAULT_PAGE_SIZE,
  })
  const { selected, toggleRow, toggleRows } = useRowSelection()

  const rows = pagination.pageItems

  const selectedCount = rows.filter((row) => selected.has(row.id)).length
  const allSelected = rows.length > 0 && selectedCount === rows.length
  const headerChecked: CheckedState =
    allSelected || (selectedCount > 0 && "indeterminate")

  const toggleAllRows = (checked: boolean) =>
    toggleRows(
      rows.map((row) => row.id),
      checked,
    )

  return {
    rows,
    pagination,
    selected,
    headerChecked,
    toggleRow,
    toggleAllRows,
  }
}
