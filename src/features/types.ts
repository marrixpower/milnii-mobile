import { AxiosResponse } from 'axios'

import { ELanguages } from '@/app/i18n'

export type TResponse<Response = unknown, Config = unknown> = Promise<
  AxiosResponse<Response, Config>
>

export type TDefaultQueryParams = {
  limit?: number
  page?: number
  sortBy?: string
  order?: number
} & TDefaultLangProps

export type TRequest<TPayload, TRes> = {
  payload: TPayload
  response: TRes
}

export type TResponseDataMeta<Data, Meta = TDefaultMeta> = {
  data: Data
  meta: Meta
}

export type TResponseData<Data> = {
  data: Data
}

export type TResponseDocs<Data> = {
  docs: Data
  totalCount: number
}

export type TDefaultMeta = {
  totalCount: number
}

export type TStandartMeta = {
  status: number
}

export type TDefaultPaginationProps = {
  limit?: number
  page?: number
}

export type TDefaultLangProps = {
  lang?: `${ELanguages}`
}
