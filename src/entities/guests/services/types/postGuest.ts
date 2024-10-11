import { TQuery } from '@/features/api/types'

import { TGuest } from '../../models'

export type TPostGuestRequest = TQuery<TPayload, TResponse>

type TPayload = {} & Omit<TGuest, 'owner' | '_id'>

type TResponse = TGuest
