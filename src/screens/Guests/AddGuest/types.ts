import { TAddGuestForm } from '@/features/guests/ui/AddGuestForm/types'

export type TGuestsStackAddGuestParams = {
  id?: string
} & Partial<TAddGuestForm>
