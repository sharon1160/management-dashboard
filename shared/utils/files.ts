/** Checks a file against an `accept` string (MIME types, `type/*` wildcards or extensions ) */
export function matchesAccept(file: File, accept: string): boolean {
  return accept
    .split(",")
    .map((type) => type.trim().toLowerCase())
    .some((type) => {
      if (type.startsWith(".")) return file.name.toLowerCase().endsWith(type)
      if (type.endsWith("/*")) return file.type.startsWith(type.slice(0, -1))
      return file.type === type
    })
}

export function isSameFile(a: File, b: File): boolean {
  return (
    a.name === b.name && a.size === b.size && a.lastModified === b.lastModified
  )
}
