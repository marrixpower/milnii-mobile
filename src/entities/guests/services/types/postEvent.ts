import { TQuery } from '@/features/api/types'

import { EGuestEventGroup, TGuestEvent } from '../../models'

export type TPostGuestEventRequest = TQuery<TPayload, TResponse>

type TPayload = {
  group: EGuestEventGroup
  name: string
  maxGuests: number
}

type TResponse = TGuestEvent
