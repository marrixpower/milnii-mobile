import { TQuery } from '@/features/api/types'

import { TResponseDocs } from '@/features/types'

import { TVendorCategory } from '../../models/common'

export type TGetCategoryRequest = TQuery<TPayload, TResponse>

type TPayload = Partial<{
  name: string
  page: number
  skip: number
  limit: number
  order: number
  sortBy: string
}>

type TResponse = TResponseDocs<TVendorCategory[]>
