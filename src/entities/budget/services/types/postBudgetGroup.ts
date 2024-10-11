import { TQuery } from '@/features/api/types'

export type TPostBudgetGroupRequest = TQuery<TPayload, TResponse>

type TPayload = {
  name: string
}

type TResponse = {}
