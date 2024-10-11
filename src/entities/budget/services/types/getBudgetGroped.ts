import { TQuery } from '@/features/api/types'

import { TBudgetGrouped } from '../../models'

export type TGetBudgetGropedRequest = TQuery<TPayload, TResponse>

type TPayload = {
  name?: string
}

type TResponse = TBudgetGrouped[]
