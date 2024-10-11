import { TResponse } from '@/features/api/types'

import { apiPrivate } from '../../../features/api'

import { TPostNoteRequest, TGetNoteRequest } from './types'

export class NoteService {
  static async postNote(
    body: TPostNoteRequest['payload'],
  ): TResponse<TPostNoteRequest['response']> {
    return apiPrivate.post('/note', body)
  }

  static async getNote(
    params: TGetNoteRequest['payload'],
  ): TResponse<TGetNoteRequest['response']> {
    return apiPrivate.get('/note', { params })
  }

  static async patchNote({
    id,
    ...body
  }: { id: string } & Partial<TPostNoteRequest['payload']>): TResponse<
    TPostNoteRequest['response']
  > {
    return apiPrivate.patch('/note/' + id, body)
  }

  static async deleteNote({
    id,
  }: {
    id: string
  }): TResponse<TGetNoteRequest['response']> {
    return apiPrivate.delete('/note/' + id)
  }
}
