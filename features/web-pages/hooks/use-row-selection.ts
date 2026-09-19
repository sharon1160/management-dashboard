import { useState } from "react"

export function useRowSelection() {
  const [selected, setSelected] = useState<ReadonlySet<string>>(() => new Set())

  const toggleRows = (ids: string[], checked: boolean) =>
    setSelected((prev) => {
      const next = new Set(prev)
      for (const id of ids) {
        if (checked) next.add(id)
        else next.delete(id)
      }
      return next
    })

  const toggleRow = (id: string, checked: boolean) => toggleRows([id], checked)

  return { selected, toggleRow, toggleRows }
}
