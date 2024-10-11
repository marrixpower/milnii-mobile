import { AxiosResponse } from 'axios'

import rootReducer from './reducer'

export type TRootState = ReturnType<typeof rootReducer>

export type TStatus = {
  code: string
  message: string
}

export type TSetStatePayload<TInitialState = {}> = Partial<TInitialState>

export enum EStoreReducer {
  user = 'user',
  task = 'task',
  favorite = 'favorite',
}

export type TDefaultPaginationParams = Partial<{
  page: number
  skip: number
  limit: number
  order: number
  sortBy: string
}>

export type TSagaResponse<Res = unknown> = AxiosResponse<Res>
