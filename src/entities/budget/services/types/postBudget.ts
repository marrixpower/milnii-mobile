import { TQuery } from '@/features/api/types'

import { EBudgetStatus } from '../../models'

export type TPostBudgetRequest = TQuery<TPayload, TResponse>

type TPayload = {
  name: string
  estimatedCost: number
  finalCost: number
  note: string
  group: string
  status: EBudgetStatus
}

type TResponse = {}
