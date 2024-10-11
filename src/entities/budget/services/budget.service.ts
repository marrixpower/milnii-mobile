import { TResponse } from '@/features/api/types'

import { apiPrivate } from '../../../features/api'

import {
  TPostBudgetRequest,
  TGetBudgetGroupRequest,
  TPostBudgetGroupRequest,
  TGetBudgetGropedRequest,
  TGetBudgetRequest,
} from './types'

export class BudgetService {
  static async postBudget(
    body: TPostBudgetRequest['payload'],
  ): TResponse<TPostBudgetRequest['response']> {
    return apiPrivate.post('/budget', body)
  }

  static async getBudget(
    params: TGetBudgetRequest['payload'],
  ): TResponse<TGetBudgetRequest['response']> {
    return apiPrivate.get('/budget', { params })
  }

  static async patchBudget({
    id,
    ...body
  }: { id: string } & Partial<TPostBudgetRequest['payload']>): TResponse<
    TPostBudgetRequest['response']
  > {
    return apiPrivate.patch('/budget/' + id, body)
  }

  static async getBudgetGroped(
    params: TGetBudgetGropedRequest['payload'],
  ): TResponse<TGetBudgetGropedRequest['response']> {
    return apiPrivate.get('/budget/grouped', { params })
  }

  static async deleteBudget({ id }: { id: string }): TResponse<{}> {
    return apiPrivate.delete('/budget/' + id)
  }

  // For budget
  static async postBudgetGroup(
    body: TPostBudgetGroupRequest['payload'],
  ): TResponse<TPostBudgetGroupRequest['response']> {
    return apiPrivate.post('/budget-group', body)
  }

  static async getBudgetGroup(
    params: TGetBudgetGroupRequest['payload'],
  ): TResponse<TGetBudgetGroupRequest['response']> {
    return apiPrivate.get('/budget-group', { params })
  }
}
