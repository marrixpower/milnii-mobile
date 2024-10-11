import { TFunction } from 'i18next'
import { z } from 'zod'

import { EGuestStatus, EGuestType } from '@/entities/guests'

import { getSchemas } from '@/shared/lib'

const guestType = Object.values(EGuestType) as [string, ...string[]]
const status = Object.values(EGuestStatus) as [string, ...string[]]

export const createGuestFormValidation = (t: TFunction) => {
  const schemas = getSchemas(t)

  return z.object({
    persons: z.array(
      z.object({
        name: schemas.requiredString,
        age: z.enum(guestType),
      }),
    ),
    group: schemas.requiredString,
    email: schemas.email.or(z.literal('')),
    phone: schemas.requiredString.or(z.literal('')).or(z.literal('+')),
    address: schemas.requiredString.or(z.literal('')),
    postalCode: schemas.requiredString.or(z.literal('')),
    note: schemas.requiredString.or(z.literal('')),
    status: z.enum(status),
    invites: z.array(z.string()).min(1, { message: t('validation.min_array') }),
  })
}
