import { useSyncExternalStore } from "react"

const subscribe = () => () => {}

export function useClientValue<T>(getValue: () => T, serverValue: T): T {
  return useSyncExternalStore(subscribe, getValue, () => serverValue)
}
