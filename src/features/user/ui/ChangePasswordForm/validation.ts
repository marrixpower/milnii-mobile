import { getSchemas } from '@/shared/lib'
import { TFunction } from 'i18next'
import { z } from 'zod'

export const changePasswordFormValidation = (t: TFunction) => {
  const schemas = getSchemas(t)

  return z.object({
    newPassword: schemas.password,
    confirmPassword: schemas.password,
  })
}
