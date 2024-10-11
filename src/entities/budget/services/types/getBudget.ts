import { TDefaultPaginationParams } from '@/app/store'

import { TQuery } from '@/features/api/types'

import { TResponseDocs } from '@/features/types'

import { EBudgetStatus, TBudget } from '../../models'

export type TGetBudgetRequest = TQuery<TPayload, TResponse>

type TPayload = {
  status?: EBudgetStatus
} & TDefaultPaginationParams

type TResponse = TResponseDocs<TBudget[]>
