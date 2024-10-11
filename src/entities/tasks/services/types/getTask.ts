import { TDefaultPaginationParams } from '@/app/store'

import { TQuery } from '@/features/api/types'
import { TResponseDocs } from '@/features/types'

import { ETaskStatus, TTask } from '../../models'

export type TGetTaskRequest = TQuery<TPayload, TResponse>

type TPayload = TDefaultPaginationParams &
  Partial<{
    activeAfterHb: string
    activeAfterLb: string
    name: string
    status: ETaskStatus[]
  }>

type TResponse = TResponseDocs<TTask[]>
