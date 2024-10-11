import { TMargin } from '@/shared/ui/utils'

import { TVendor } from '../../models/common'

export type TListCardProps = {
  booked?: boolean
  recommended?: boolean
  vendor: TVendor
  onRefresh?: () => void
  isDefSaved?: boolean
} & TMargin
