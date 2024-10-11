import { TQuery } from '@/features/api/types'
import { TResponseDocs } from '@/features/types'

import { EFavoriteType, TFavorite } from '../../models/common'

export type TGetFavorites = TQuery<TPayload, TResponse>

type TPayload = {
  type: EFavoriteType
} & Partial<{
  name: string
  page: number
  skip: number
  limit: number
  order: number
  sortBy: string
  category: string
}>

type TResponse = TResponseDocs<TFavorite[]>
