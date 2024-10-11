import { TQuery } from '@/features/api/types'

import { EFavoriteType } from '../../models'

export type TDeleteFavorites = TQuery<TPayload, TResponse>

type TPayload = { id: string; type: EFavoriteType }

type TResponse = {}
