import { TQuery } from '@/features/api/types'
import { ERoles, TUser } from '../../models/common'

export type TPostUser = TQuery<TPayload, TResponse>

type TPayload = {
  name: string
  email: string
  country: string
  city: string
  category?: string
  type: 'user'
  weddingDate: string
  role: ERoles
}

type TResponse = TUser
