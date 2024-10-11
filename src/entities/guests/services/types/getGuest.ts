import { TDefaultPaginationParams } from '@/app/store'

import { TQuery } from '@/features/api/types'

import { TResponseDocs } from '@/features/types'

import { EGuestStatus, TGuest } from '../../models'

export type TGetGuestRequest = TQuery<TPayload, TResponse>

type TPayload = { status?: EGuestStatus } & TDefaultPaginationParams

type TResponse = TResponseDocs<TGuest[]>
