import { TQuery } from '@/features/api/types'

export type TDeleteGuestRequest = TQuery<TPayload, TResponse>

type TPayload = { id: string }

type TResponse = {}
