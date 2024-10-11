import { TGuest } from '@/entities/guests'

export type TGuestListItemProps = {
  onAddButtonPress?: () => void
  withoutPadding?: boolean
} & TGuest
