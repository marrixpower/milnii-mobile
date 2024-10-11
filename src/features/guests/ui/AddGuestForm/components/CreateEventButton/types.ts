import { EGuestEventGroup } from '@/entities/guests'

export type TCreateEventButton = {
  group: EGuestEventGroup
  onRefresh: () => void
}
