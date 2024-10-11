import { TVendor } from '@/entities/vendor/models/common'

import { TFavoriteCategory } from '../../models'

export * from './getUser'

export type TInitialState = {
  loading: boolean
  favorites: TVendor[]
  favoriteTotalCount: number

  savedCategory: TFavoriteCategory[]
}
