import { AxiosResponse } from 'axios'

export type TResponse<Response = unknown, Config = unknown> = Promise<
  AxiosResponse<Response, Config>
>

export type TQuery<TPayload, TRes> = {
  payload: TPayload
  response: TRes
}

export type TQueryErrorData = {
  error: string
  message: string
  statusCode: number
}

export type TQueryErrorDefaultData = {
  code?: string
  message?: string
}

export type TListData<T> = {
  docs: Array<T>
  totalCount: number
}

export type TListParams = Partial<{
  page: number
  skip: number
  limit: number
  order: 1 | -1
  sortBy: string
}>
