import { TQuery } from '@/features/api/types'

export type TPostSupportRequest = TQuery<TPayload, TResponse>

type TPayload = {
  name: string
  message: string
  email: string
  device: string
  osVersion: string
  permissions: string[]
}

type TResponse = {}
