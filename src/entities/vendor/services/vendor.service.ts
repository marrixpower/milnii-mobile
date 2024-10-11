import { TResponse } from '@/features/api/types'

import { apiPrivate } from '../../../features/api'

import {
  TGetVendorRequest,
  TGetVendorByIdRequest,
  TGetCategoryRequest,
} from './types'

export class VendorService {
  static async getVendors(
    params: TGetVendorRequest['payload'],
  ): TResponse<TGetVendorRequest['response']> {
    return apiPrivate.get('/business', { params })
  }

  static async getVendorById({
    id,
  }: TGetVendorByIdRequest['payload']): TResponse<
    TGetVendorByIdRequest['response']
  > {
    return apiPrivate.get(`/business/${id}`)
  }

  static async getCategory(
    params: TGetCategoryRequest['payload'],
  ): TResponse<TGetCategoryRequest['response']> {
    return apiPrivate.get('/category', { params })
  }
}
