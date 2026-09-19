interface DayLabelsProps {
  labels: string[]
}

export function DayLabels({ labels }: DayLabelsProps) {
  return (
    <div className="flex justify-between text-[11px]">
      {labels.map((label) => (
        <span key={label} className="flex justify-center whitespace-nowrap">
          {label}
        </span>
      ))}
    </div>
  )
}
