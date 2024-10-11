import { EGuestStatus, EGuestType } from '@/entities/guests'

export type TAddGuestForm = {
  persons: {
    name: string
    age: EGuestType
  }[]
  group: string
  type: EGuestType
  email: string
  phone: string
  address: string
  postalCode: string
  note: string
  status: EGuestStatus
  invites: string[]
}
