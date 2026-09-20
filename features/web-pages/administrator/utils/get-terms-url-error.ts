import { TERMS_URL_PREFIX } from "../constants"

export function getTermsUrlError(termsUrl: string): string | null {
  if (!termsUrl) {
    return "Añade el enlace de los términos y condiciones"
  }
  if (termsUrl.includes("://")) {
    return `Escribe el enlace sin ${TERMS_URL_PREFIX}`
  }
  if (!URL.canParse(`${TERMS_URL_PREFIX}${termsUrl}`)) {
    return "El enlace no es válido"
  }
  return null
}
