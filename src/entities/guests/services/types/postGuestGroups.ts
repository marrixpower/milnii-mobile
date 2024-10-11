import { TQuery } from '@/features/api/types'

export type TPostGuestGroupsRequest = TQuery<TPayload, TResponse>

type TPayload = { name: string }

type TResponse = {
  owner: string
  name: string
}
