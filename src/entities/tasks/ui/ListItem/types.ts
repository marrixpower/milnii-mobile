import { TTask } from '../../models'

export type TListItemProps = {
  onPress: () => void
  onRefresh?: () => void
} & Partial<TTask>
