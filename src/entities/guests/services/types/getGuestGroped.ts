import { TDefaultPaginationParams } from '@/app/store'

import { TQuery } from '@/features/api/types'

import { TGuestGroped } from '../../models'

export type TGetGuestGropedRequest = TQuery<TPayload, TResponse>

type TPayload = { name?: string } & TDefaultPaginationParams

type TResponse = TGuestGroped[]
