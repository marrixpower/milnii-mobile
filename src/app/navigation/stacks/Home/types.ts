import { TBudgetStackAddExpenseParams } from '@/screens/Budget/AddExpense'
import { TGuestsStackAddGuestParams } from '@/screens/Guests/AddGuest/types'
import { THomeStackMainScreenParams } from '@/screens/Home/Main'

import { THomeStackVendorsParams } from '@/screens/Home/Vendors'

import { TTaskStackSingleTaskParams } from '@/screens/Tasks/Task/types'
import { TVendorsStackVendorProfileParams } from '@/screens/Vendors/VendorProfile'

import { EScreens } from '../../screens'

import { TBudgetStack } from '../Budget/types'
import { EStacks } from '../stacks'

export type THomeStack = {
  [EScreens.HomeMain]: THomeStackMainScreenParams
  [EScreens.HomeVendors]: THomeStackVendorsParams
  [EStacks.Favorites]: undefined
  [EStacks.Guests]: undefined
  [EScreens.VendorsVendorProfile]: TVendorsStackVendorProfileParams
  [EScreens.HomeTask]: TTaskStackSingleTaskParams
  [EStacks.Budget]: TBudgetStack
  [EScreens.HomeGuests]: TGuestsStackAddGuestParams
  [EScreens.BudgetAddExpense]: TBudgetStackAddExpenseParams
}
