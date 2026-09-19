"use client"

import { cn } from "cn"
import Image from "next/image"
import { useRef } from "react"

import { useFileDropzone } from "../../hooks/use-file-dropzone"
import { Button } from "../ui/button"
import { SelectedFiles } from "./SelectedFiles"

interface FileDropzoneProps {
  files: File[]
  accept: string
  acceptLabel: string
  buttonLabel: string
  hint: string
  maxFiles: number
  onChange: (files: File[]) => void
}

export const FileDropzone = ({
  files,
  accept,
  acceptLabel,
  buttonLabel,
  hint,
  maxFiles,
  onChange,
}: FileDropzoneProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { isDragging, isFull, addFiles, removeFile, dropzoneProps } =
    useFileDropzone({ files, accept, acceptLabel, maxFiles, onChange })

  return (
    <div
      {...dropzoneProps}
      className={cn(
        "flex flex-1 flex-col items-center justify-center gap-3 rounded-md border border-dashed border-transparent p-4 transition-colors",
        isDragging && "border-primary bg-primary/5",
      )}
    >
      <Image src="/file-icon.svg" alt="" width={20} height={24} />
      <Button
        type="button"
        disabled={isFull}
        className="px-7 text-xs font-medium"
        onClick={() => inputRef.current?.click()}
      >
        {buttonLabel}
      </Button>
      <p className="text-xs text-muted-foreground">{hint}</p>
      <input
        ref={inputRef}
        type="file"
        multiple
        hidden
        accept={accept}
        onChange={(event) => {
          addFiles(event.target.files)
          event.target.value = ""
        }}
      />
      {files.length > 0 && (
        <SelectedFiles files={files} onRemove={removeFile} />
      )}
    </div>
  )
}
