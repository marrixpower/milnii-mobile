import { TBudget } from '@/entities/budget'

export type TBudgetListItemProps = {
  onRefresh?: () => void
  withoutPadding?: boolean
} & TBudget
