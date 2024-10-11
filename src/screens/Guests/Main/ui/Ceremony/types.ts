import { EGuestStatus } from '@/entities/guests'

export type TCeremonyProps = {
  value?: EGuestStatus
  selectedValue?: EGuestStatus
  total?: number
  filled?: number
  onPress?: (value: EGuestStatus | undefined) => void
}
