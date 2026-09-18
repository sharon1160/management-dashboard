/** Capitalizes the first letter: "monday" -> "Monday" */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

/** Returns up to two initials in uppercase: "Miguel Liberato" -> "ML" */
export function getInitials(fullName: string): string {
  return fullName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
}
