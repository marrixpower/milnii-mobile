import { TQuery } from '@/features/api/types'

import { TGuest } from '../../models'

export type TPatchGuestRequest = TQuery<TPayload, TResponse>

type TPayload = { id: string } & Partial<Omit<TGuest, 'owner'>>

type TResponse = TGuest
