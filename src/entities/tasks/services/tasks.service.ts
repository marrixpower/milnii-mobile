import { TResponse } from '@/features/api/types'

import { apiPrivate } from '../../../features/api'

import { ETaskStatus } from '../models'

import { TGetTaskRequest, TPostTaskRequest } from './types'

const path = '/task'

export class TasksService {
  static async getTasks(
    params: TGetTaskRequest['payload'],
  ): TResponse<TGetTaskRequest['response']> {
    return apiPrivate.get(path, { params })
  }

  static async postTask(
    data: TPostTaskRequest['payload'],
  ): TResponse<TPostTaskRequest['response']> {
    return apiPrivate.post(path, data)
  }

  static async patchTask({
    id,
    ...data
  }: { id: string; status?: ETaskStatus } & Partial<
    TPostTaskRequest['payload']
  >): TResponse<TPostTaskRequest['response']> {
    return apiPrivate.patch(`${path}/${id}`, data)
  }

  static async deleteTask({ id, ...data }: { id: string }): TResponse<{}> {
    return apiPrivate.delete(`${path}/${id}`, data)
  }
}
