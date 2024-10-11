import { TDefaultPaginationParams } from '@/app/store'

import { TQuery } from '@/features/api/types'
import { TResponseDocs } from '@/features/types'

import { TBudgetGroup } from '../../models'

export type TGetBudgetGroupRequest = TQuery<TPayload, TResponse>

type TPayload = {} & TDefaultPaginationParams

type TResponse = TResponseDocs<TBudgetGroup[]>
