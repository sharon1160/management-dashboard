import { webPagesSchema } from "../schemas/web-page.schema"
import webPagesData from "./web-pages.json"

export const WEB_PAGES = webPagesSchema.parse(webPagesData)
