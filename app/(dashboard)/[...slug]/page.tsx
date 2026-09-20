import { notFound } from "next/navigation"

// Catch-all so unmatched URLs resolve inside the (dashboard) layout
// and render app/(dashboard)/not-found.tsx instead of the root 404.
export default function CatchAllPage() {
  notFound()
}
