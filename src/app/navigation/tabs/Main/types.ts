import { EStacks, THomeStack } from '../../stacks'
import { TBudgetStack } from '../../stacks/Budget/types'
import { TMoreStack } from '../../stacks/More/types'
import { TTasksStack } from '../../stacks/Tasks/types'
import { TVendorStack } from '../../stacks/Vendors/types'
import { TNavigatorScreenParams } from '../../types'

export type TMainTab = {
  [EStacks.Home]: TNavigatorScreenParams<THomeStack>
  [EStacks.Vendors]: TNavigatorScreenParams<TVendorStack>
  [EStacks.More]: TNavigatorScreenParams<TMoreStack>
  [EStacks.Budget]: TNavigatorScreenParams<TBudgetStack>
  [EStacks.Tasks]: TNavigatorScreenParams<TTasksStack>
}
