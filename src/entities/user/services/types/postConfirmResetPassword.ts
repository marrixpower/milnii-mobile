import { TQuery } from '@/features/api/types'

export type TPostConfirmResetPasswordRequest = TQuery<TPayload, TResponse>

type TPayload = {
  email: string
  password: string
  resetToken: string
}

type TResponse = {}
