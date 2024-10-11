import { TFunction } from 'i18next'
import { z } from 'zod'

import { getSchemas } from '@/shared/lib'

export const createBudgetFormValidation = (t: TFunction) => {
  const schemas = getSchemas(t)

  return z.object({
    estimatedCost: schemas.requiredString.refine(
      data => +data.replace(/[$,]/g, '') > 0,
      { message: t('budget.errors.estimatedPrice') },
    ),
    finalCost: z.string().optional(),
    group: schemas.requiredString,
    name: schemas.requiredString,
    note: schemas.requiredString.or(z.literal('')),
  })
}
