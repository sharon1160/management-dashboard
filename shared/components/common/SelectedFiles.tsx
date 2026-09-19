import { FileText, X } from "lucide-react"

import { Button } from "../ui/button"

interface SelectedFilesProps {
  files: File[]
  onRemove: (index: number) => void
}

export const SelectedFiles = ({ files, onRemove }: SelectedFilesProps) => {
  return (
    <ul className="flex w-full max-w-72 flex-col gap-1.5">
      {files.map((file, index) => (
        <li
          key={`${file.name}-${file.lastModified}`}
          className="flex items-center gap-2 rounded-md border px-2 py-1 text-xs"
        >
          <FileText className="size-4 shrink-0 text-primary" />
          <span className="truncate" title={file.name}>
            {file.name}
          </span>
          <Button
            type="button"
            variant="ghost"
            size="icon-xs"
            className="ml-auto"
            aria-label={`Quitar ${file.name}`}
            onClick={() => onRemove(index)}
          >
            <X />
          </Button>
        </li>
      ))}
    </ul>
  )
}
