import { getSchemas } from '@/shared/lib'
import { TFunction } from 'i18next'
import { z } from 'zod'

export const editProfileFormValidation = (t: TFunction) => {
  const schemas = getSchemas(t)

  return z.object({
    name: schemas.requiredString,
    email: schemas.requiredString,
    phone: schemas.optionalString,
    country: schemas.requiredString,
    city: schemas.requiredString,
    partner: schemas.optionalString,
    weddingDate: schemas.requiredString,
  })
}
