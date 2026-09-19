import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/shared/components/ui/button"
import { cn } from "cn"

interface TablePaginationProps {
  page: number
  totalPages: number
  from: number
  to: number
  totalItems: number
  onPageChange: (page: number) => void
}

export const TablePagination = ({
  page,
  totalPages,
  from,
  to,
  totalItems,
  onPageChange,
}: TablePaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex flex-col items-center justify-between gap-3 text-xs font-medium sm:flex-row">
      <p>
        Mostrando {from} a {to} de {totalItems} datos
      </p>
      <nav
        aria-label="Paginación"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <span className="mr-2">
          {page} de {totalPages} páginas
        </span>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Página anterior"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          <ChevronLeft />
        </Button>
        {pages.map((number) => {
          const isActive = number === page

          return (
            <Button
              key={number}
              variant={isActive ? "secondary" : "ghost"}
              size="icon"
              aria-current={isActive ? "page" : undefined}
              className={cn("text-xs", isActive && "font-bold text-primary")}
              onClick={() => onPageChange(number)}
            >
              {number}
            </Button>
          )
        })}
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Página siguiente"
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          <ChevronRight />
        </Button>
      </nav>
    </div>
  )
}
