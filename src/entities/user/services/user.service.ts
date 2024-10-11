import { generateFormData } from '@/app/store/tools'

import { TResponse } from '@/features/api/types'

import { apiPrivate } from '../../../features/api'

import { TUser } from '../models/common'

import {
  TPatchPhoto,
  TPostUser,
  TPostResetPasswordRequest,
  TPostConfirmResetPasswordRequest,
  TPostSupportRequest,
} from './types'

import { TPatchUser } from './types/patchUser'

export class UserService {
  static async postUser(
    body: TPostUser['payload'],
  ): TResponse<TPostUser['response']> {
    return apiPrivate.post('/user/me', body)
  }
  static async getUserMe(): TResponse<TUser> {
    return apiPrivate.get('/user/me')
  }

  static async deleteUserMe(): TResponse<{}> {
    return apiPrivate.delete('/user/me')
  }

  static async patchUser(
    body: TPatchUser['payload'],
  ): TResponse<TPatchUser['response']> {
    return apiPrivate.patch('/user/me', body)
  }
  static async patchPhoto(
    payload: TPatchPhoto['payload'],
  ): TResponse<TPatchPhoto['response']> {
    const formData = generateFormData(payload, ['image'])
    console.log(payload, 'payload')
    console.log('form data => ', JSON.stringify(formData, null, 2))
    return apiPrivate.patch('/user/me/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  static async postResetPassword(
    body: TPostResetPasswordRequest['payload'],
  ): TResponse<TPostResetPasswordRequest['response']> {
    return apiPrivate.post('/user/reset-password', body)
  }

  static async postConfirmResetPassword(
    body: TPostConfirmResetPasswordRequest['payload'],
  ): TResponse<TPostConfirmResetPasswordRequest['response']> {
    return apiPrivate.post('/user/confirm-password-reset', body)
  }

  static async postSupport(
    body: TPostSupportRequest['payload'],
  ): TResponse<TPostSupportRequest['response']> {
    return apiPrivate.post('/support', body)
  }
}
