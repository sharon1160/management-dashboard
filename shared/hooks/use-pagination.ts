import { useState } from "react"

interface UsePaginationOptions<T> {
  items: T[]
  initialPageSize: number
}

export function usePagination<T>({
  items,
  initialPageSize,
}: UsePaginationOptions<T>) {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(initialPageSize)

  const totalItems = items.length
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))
  const currentPage = Math.min(page, totalPages)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize, totalItems)

  const goToPage = (next: number) =>
    setPage(Math.min(Math.max(next, 1), totalPages))

  const changePageSize = (size: number) => {
    setPageSize(size)
    setPage(1)
  }

  return {
    page: currentPage,
    pageSize,
    totalItems,
    totalPages,
    pageItems: items.slice(startIndex, endIndex),
    from: totalItems === 0 ? 0 : startIndex + 1,
    to: endIndex,
    setPage: goToPage,
    setPageSize: changePageSize,
  }
}
