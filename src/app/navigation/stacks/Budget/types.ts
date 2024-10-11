import { TBudgetStackAddExpenseParams } from '@/screens/Budget/AddExpense'
import { EScreens } from '../../screens'
import { TBudgetStackMainParams } from '@/screens/Budget/Main'

export type TBudgetStack = {
  [EScreens.BudgetMain]: TBudgetStackMainParams
  [EScreens.BudgetAddExpense]: TBudgetStackAddExpenseParams
}
