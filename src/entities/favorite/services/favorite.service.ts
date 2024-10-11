import { TResponse } from '@/features/api/types'

import { apiPrivate } from '../../../features/api'

import {
  TGetFavorites,
  TDeleteFavorites,
  TPostFavorites,
  TGetFavoriteCategoryRequest,
} from './types'

export class FavoriteService {
  static async getFavorites(
    params: TGetFavorites['payload'],
  ): TResponse<TGetFavorites['response']> {
    return apiPrivate.get('/favorite', { params })
  }

  static async postFavorites(
    data: TPostFavorites['payload'],
  ): TResponse<TPostFavorites['response']> {
    return apiPrivate.post('/favorite', data)
  }

  static async deleteFavorites({
    id,
    ...params
  }: TDeleteFavorites['payload']): TResponse<TDeleteFavorites['response']> {
    return apiPrivate.delete(`/favorite/${id}`, { params })
  }

  static async getFavoritesCategory(
    params: TGetFavoriteCategoryRequest['payload'],
  ): TResponse<TGetFavoriteCategoryRequest['response']> {
    return apiPrivate.get(`/favorite/category`, { params })
  }
}
