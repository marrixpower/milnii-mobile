import { TVendor, TVendorCategory } from '@/entities/vendor/models/common'

export type TFavorite = {
  _id: string
  owner: string
  createdAt: string
  updatedAt: string
  favorite: TVendor
  type: EFavoriteType
}

export enum EFavoriteType {
  favorite = 'favorite',
  saved = 'saved',
}

export type TFavoriteCategory = {
  category: TVendorCategory
  count: number
  favorite: TVendor
}
