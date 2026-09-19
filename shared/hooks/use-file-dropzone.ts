import { useState, type DragEvent } from "react"
import { toast } from "sonner"

import { isSameFile, matchesAccept } from "../utils/files"

interface UseFileDropzoneOptions {
  files: File[]
  accept: string
  acceptLabel: string
  maxFiles: number
  onChange: (files: File[]) => void
}

const isFileDrag = (event: DragEvent) =>
  event.dataTransfer.types.includes("Files")

export function useFileDropzone({
  files,
  accept,
  acceptLabel,
  maxFiles,
  onChange,
}: UseFileDropzoneOptions) {
  const [isDragging, setIsDragging] = useState(false)

  const isFull = files.length >= maxFiles

  const addFiles = (incoming: FileList | null) => {
    const candidates = Array.from(incoming ?? [])
    const accepted = candidates.filter((file) => matchesAccept(file, accept))
    const unique = accepted.filter(
      (file) => !files.some((existing) => isSameFile(existing, file)),
    )
    const allowed = unique.slice(0, maxFiles - files.length)

    if (accepted.length < candidates.length) {
      toast.error(`Solo se permiten archivos ${acceptLabel}`)
    }
    if (unique.length < accepted.length) {
      toast.warning("Algunos archivos ya estaban agregados")
    }
    if (allowed.length < unique.length) {
      toast.warning(`Puedes subir un máximo de ${maxFiles} archivos`)
    }
    if (allowed.length) onChange([...files, ...allowed])
  }

  const removeFile = (index: number) =>
    onChange(files.filter((_, i) => i !== index))

  const dropzoneProps = {
    onDragOver: (event: DragEvent<HTMLElement>) => {
      if (!isFileDrag(event)) return
      event.preventDefault()
      setIsDragging(true)
    },
    onDragLeave: (event: DragEvent<HTMLElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
        setIsDragging(false)
      }
    },
    onDrop: (event: DragEvent<HTMLElement>) => {
      event.preventDefault()
      setIsDragging(false)
      addFiles(event.dataTransfer.files)
    },
  }

  return { isDragging, isFull, addFiles, removeFile, dropzoneProps }
}
