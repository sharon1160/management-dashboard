const IMAGE_PROVIDER = "https://picsum.photos/seed"

/** External image API */
export function getThumbnailUrl(seed: string, size: number): string {
  return `${IMAGE_PROVIDER}/${encodeURIComponent(seed)}/${size}/${size}`
}
