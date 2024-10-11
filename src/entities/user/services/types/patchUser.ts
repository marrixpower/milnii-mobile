import { TQuery } from '@/features/api/types'

import { TUser } from '../../models/common'

export type TPatchUser = TQuery<TPayload, TResponse>

type TPayload = {
  name: string
  email: string
  country: string
  city: string
  partner: string
  phone: string | undefined
  weddingDate: string
}

type TResponse = TUser
