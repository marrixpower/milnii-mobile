import { TQuery } from '@/features/api/types'

export type TPostResetPasswordRequest = TQuery<TPayload, TResponse>

type TPayload = {
  email: string
}

type TResponse = {}
