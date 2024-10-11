import { TFunction } from 'i18next'
import { z } from 'zod'

import { getSchemas } from '@/shared/lib'

export const newPasswordFormValidation = (t: TFunction) => {
  const schemas = getSchemas(t)

  return z.object({
    newPassword: schemas.password,
    confirmPassword: schemas.password,
  })
}
