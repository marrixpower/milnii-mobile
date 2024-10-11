import { TDefaultPaginationParams } from '@/app/store'

import { TQuery } from '@/features/api/types'
import { TResponseDocs } from '@/features/types'

import { TGuestEvent } from '../../models'

export type TGetGuestEventRequest = TQuery<TPayload, TResponse>

type TPayload = {} & TDefaultPaginationParams

type TResponse = TResponseDocs<TGuestEvent[]>
