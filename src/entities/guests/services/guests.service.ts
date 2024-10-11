import { TResponse } from '@/features/api/types'

import { apiPrivate } from '../../../features/api'

import {
  TPostGuestRequest,
  TGetGuestRequest,
  TPatchGuestRequest,
  TDeleteGuestRequest,
  TGetGuestGroupsRequest,
  TPostGuestGroupsRequest,
  TGetGuestEventRequest,
  TPostGuestEventRequest,
  TGetGuestGropedRequest,
} from './types'

export class GuestsService {
  static async postGuest(
    body: TPostGuestRequest['payload'],
  ): TResponse<TPostGuestRequest['response']> {
    return apiPrivate.post('/guest', body)
  }

  static async getGuests(
    params: TGetGuestRequest['payload'],
  ): TResponse<TGetGuestRequest['response']> {
    return apiPrivate.get('/guest', { params })
  }

  static async getGuestsGroped(
    params: TGetGuestGropedRequest['payload'],
  ): TResponse<TGetGuestGropedRequest['response']> {
    return apiPrivate.get('/guest/grouped', { params })
  }

  static async patchGuest({
    id,
    ...body
  }: TPatchGuestRequest['payload']): TResponse<TPatchGuestRequest['response']> {
    return apiPrivate.patch('/guest/' + id, body)
  }

  static async deleteGuest({
    id,
  }: TDeleteGuestRequest['payload']): TResponse<
    TDeleteGuestRequest['response']
  > {
    return apiPrivate.delete('/guest/' + id)
  }

  //Guest Group

  static async getGuestGroups(
    params: TGetGuestGroupsRequest['payload'],
  ): TResponse<TGetGuestGroupsRequest['response']> {
    return apiPrivate.get('/guest-group', { params })
  }

  static async postGuestGroups(
    data: TPostGuestGroupsRequest['payload'],
  ): TResponse<TPostGuestGroupsRequest['response']> {
    return apiPrivate.post('/guest-group', data)
  }

  //Guest Event
  static async getEvent(
    params: TGetGuestEventRequest['payload'],
  ): TResponse<TGetGuestEventRequest['response']> {
    return apiPrivate.get('/event', { params })
  }

  static async postEvent(
    data: TPostGuestEventRequest['payload'],
  ): TResponse<TPostGuestEventRequest['response']> {
    return apiPrivate.post('/event', data)
  }
}
