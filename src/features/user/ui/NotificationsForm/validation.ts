import { getSchemas } from '@/shared/lib'
import { TFunction } from 'i18next'
import { z } from 'zod'

export const notificationFormValidation = (t: TFunction) => {
  const schemas = getSchemas(t)

  return z.object({
    email: schemas.email,
    updates: schemas.boolean,
    news: schemas.boolean,
    offers: schemas.boolean,
  })
}
