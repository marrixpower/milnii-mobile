import { TQuery } from '@/features/api/types'

import { TUser } from '../../models/common'

export type TPatchPhoto = TQuery<TPayload, TResponse>

type TPayload = {
  image: string
}

type TResponse = TUser
