import { TQuery } from '@/features/api/types'

import { ETaskTimeLine, TTask } from '../../models'

export type TPostTaskRequest = TQuery<TPayload, TResponse>

type TPayload = {
  name: string
  description: string
  budget: number
  budgetName: string
  dateType: ETaskTimeLine
  activeAfter?: string
}

type TResponse = TTask
