import { TDefaultPaginationParams } from '@/app/store'

import { TQuery } from '@/features/api/types'
import { TResponseDocs } from '@/features/types'

import { TGuestGroups } from '../../models'

export type TGetGuestGroupsRequest = TQuery<TPayload, TResponse>

type TPayload = {} & TDefaultPaginationParams

type TResponse = TResponseDocs<TGuestGroups[]>
