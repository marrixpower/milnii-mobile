import { TFunction } from 'i18next'
import { z } from 'zod'

import { getSchemas } from '@/shared/lib'

export const contactFormValidation = (t: TFunction) => {
  const schemas = getSchemas(t)

  return z.object({
    name: schemas.requiredString,
    email: schemas.email,
    message: schemas.requiredString,
    terms: schemas.boolean.refine(value => value === true, {
      message: t('validation.required'),
    }),
  })
}
