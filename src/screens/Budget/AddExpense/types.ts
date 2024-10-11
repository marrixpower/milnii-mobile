import { TBudgetForm } from '@/features/budget/ui/AddExpenseForm/types'

import { EBudgetStatus } from '@/entities/budget'

export type TBudgetStackAddExpenseParams = {
  id?: string
  status?: EBudgetStatus
} & Partial<TBudgetForm>
