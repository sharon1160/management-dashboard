"use client"

import { Filter, Plus } from "lucide-react"

import { PageSizeSelect } from "@/shared/components/common/PageSizeSelect"
import { SectionTitle } from "@/shared/components/common/SectionTitle"
import { TablePagination } from "@/shared/components/common/TablePagination"
import { Button } from "@/shared/components/ui/button"
import { Card } from "@/shared/components/ui/card"

import { WebPagesTable } from "./components/web-pages-table"
import { PAGE_SIZE_OPTIONS } from "./constants"
import { WEB_PAGES } from "./data"
import { useWebPagesTable } from "./hooks/use-web-pages-table"

export function WebPages() {
  const {
    rows,
    pagination,
    selected,
    headerChecked,
    toggleRow,
    toggleAllRows,
  } = useWebPagesTable(WEB_PAGES)

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3 p-4 md:p-4.5">
      <SectionTitle as="h1">Páginas webs</SectionTitle>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <PageSizeSelect
          value={pagination.pageSize}
          options={PAGE_SIZE_OPTIONS}
          onChange={pagination.setPageSize}
        />
        <div className="flex w-full justify-between gap-4 sm:w-auto">
          <Button variant="outline" className="px-2 text-xs">
            <Filter /> Filtrar
          </Button>
          <Button className="text-xs">
            <Plus /> Agregar categoría
          </Button>
        </div>
      </div>
      <Card className="min-h-64 flex-1 py-0">
        <WebPagesTable
          rows={rows}
          startNumber={pagination.from}
          selected={selected}
          headerChecked={headerChecked}
          onSelectRow={toggleRow}
          onSelectAll={toggleAllRows}
        />
      </Card>
      <TablePagination
        page={pagination.page}
        totalPages={pagination.totalPages}
        from={pagination.from}
        to={pagination.to}
        totalItems={pagination.totalItems}
        onPageChange={pagination.setPage}
      />
    </div>
  )
}
