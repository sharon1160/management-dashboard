import { cn } from "cn"

import { ImageWithSkeleton } from "@/shared/components/common/ImageWithSkeleton"
import { Checkbox } from "@/shared/components/ui/checkbox"
import { TableCell, TableRow } from "@/shared/components/ui/table"
import { formatShortDateTime } from "@/shared/utils/dates"

import type { WebPage } from "../types"
import { getThumbnailUrl } from "../utils/thumbnail"
import { CategoryBadge } from "./category-badge"
import { RowActions } from "./row-actions"

const THUMBNAIL_SIZE = 32

interface WebPageRowProps {
  row: WebPage
  number: number
  isSelected: boolean
  className?: string
  onSelect: (id: string, checked: boolean) => void
}

export function WebPageRow({
  row,
  number,
  isSelected,
  className,
  onSelect,
}: WebPageRowProps) {
  return (
    <TableRow
      className={cn("[&>td]:py-3", className)}
      data-state={isSelected && "selected"}
    >
      <TableCell className="pl-4.75">
        <Checkbox
          className="size-5"
          aria-label={`Seleccionar ${row.title} ${number}`}
          checked={isSelected}
          onCheckedChange={(checked) => onSelect(row.id, checked === true)}
        />
      </TableCell>
      <TableCell className="text-center text-xs">{number}</TableCell>
      <TableCell className="pl-3.5">
        <div className="flex items-center gap-3">
          <ImageWithSkeleton
            src={getThumbnailUrl(row.imageSeed, THUMBNAIL_SIZE * 2)}
            alt=""
            width={THUMBNAIL_SIZE}
            height={THUMBNAIL_SIZE}
            wrapperClassName="rounded-sm"
          />
          <div>
            <p className="font-semibold">{row.title}</p>
            <p>{row.subtitle}</p>
          </div>
        </div>
      </TableCell>
      <TableCell className="whitespace-normal">
        <p className="line-clamp-2 max-w-xl">{row.description}</p>
      </TableCell>
      <TableCell>{formatShortDateTime(row.createdAt)}</TableCell>
      <TableCell className="text-center">
        <CategoryBadge category={row.category} />
      </TableCell>
      <TableCell className="pr-7.5">
        <RowActions title={row.title} />
      </TableCell>
    </TableRow>
  )
}
