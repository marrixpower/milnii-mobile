import { TDefaultPaginationParams } from '@/app/store'

import { TQuery } from '@/features/api/types'
import { TResponseDocs } from '@/features/types'

import { EFavoriteType, TFavoriteCategory } from '../../models'

export type TGetFavoriteCategoryRequest = TQuery<TPayload, TResponse>

type TPayload = TDefaultPaginationParams & {
  type?: EFavoriteType
}

type TResponse = TResponseDocs<TFavoriteCategory[]>
