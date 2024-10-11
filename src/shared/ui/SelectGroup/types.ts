import { TGuestGroups } from '@/entities/guests'

export type TSelectGroupProps = {
  title?: string
  onTitlePress?: () => void
  onAddPress?: () => void
  onChange?: (id: string) => void
  onClose?: () => void
  open?: boolean
  addText?: string
  data: TGuestGroups[]
  value: string
  error?: string
}
