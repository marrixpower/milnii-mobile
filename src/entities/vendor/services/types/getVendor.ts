import { TQuery } from '@/features/api/types'

import { TResponseDocs } from '@/features/types'

import { TVendor } from '../../models/common'

export type TGetVendorRequest = TQuery<TPayload, TResponse>

type TPayload = { category?: string } & Partial<{
  name: string
  owner: string
  page: number
  skip: number
  limit: number
  order: number
  sortBy: string
}>

type TResponse = TResponseDocs<TVendor[]>
