import { categoryFormOptionsSchema } from "../schemas/category-form-options.schema"
import categoryFormOptionsData from "./category-form-options.json"

export const CATEGORY_FORM_OPTIONS = categoryFormOptionsSchema.parse(
  categoryFormOptionsData,
)
