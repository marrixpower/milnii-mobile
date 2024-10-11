import { getSchemas } from '@/shared/lib'
import { TFunction } from 'i18next'
import { z } from 'zod'

export const createAccountValidation = (t: TFunction) => {
  const schemas = getSchemas(t)

  return z.object({
    fullName: schemas.requiredString,
    email: schemas.email,
    password: schemas.password,
    role: schemas.requiredObject,
    weddingDate: schemas.requiredString,
    country: schemas.requiredString,
    city: schemas.requiredString,
    terms: z.literal(true),
    promotion: schemas.boolean,
  })
}
