import { TFunction } from 'i18next'
import { z } from 'zod'

import { ETaskTimeLine } from '@/entities/tasks/models'

import { getSchemas } from '@/shared/lib'

const dateType = Object.values(ETaskTimeLine) as [string, ...string[]]

export const createTaskFormValidation = (t: TFunction) => {
  const schemas = getSchemas(t)

  return z.object({
    name: schemas.requiredString,
    description: z.string().or(z.literal('')),
    dateType: z.enum(dateType),
  })
}
