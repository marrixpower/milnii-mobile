import { EGuestEventGroup } from '@/entities/guests'

export type TCreateEventProps = {
  group: EGuestEventGroup
  open: boolean
  setOpen: (value: boolean) => void
  onRefresh?: () => void
}
