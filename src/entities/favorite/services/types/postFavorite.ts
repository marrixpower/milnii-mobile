import { TQuery } from '@/features/api/types'

import { EFavoriteType } from '../../models'

export type TPostFavorites = TQuery<TPayload, TResponse>

type TPayload = {
  favorite: string
  type: EFavoriteType
}

type TResponse = {}
