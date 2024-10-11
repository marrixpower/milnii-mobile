import { getSchemas } from '@/shared/lib'
import { TFunction } from 'i18next'
import { z } from 'zod'

export const loginFormValidation = (t: TFunction) => {
  const schemas = getSchemas(t)

  return z.object({
    email: schemas.email,
    password: schemas.password,
  })
}
