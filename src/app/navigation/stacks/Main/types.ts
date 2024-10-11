import { ETab } from '../../tabs'
import { TMainTab } from '../../tabs/Main/types'
import { TNavigatorScreenParams } from '../../types'
import { TAuthStack } from '../Auth/types'
import { EStacks } from '../stacks'

export type TMainStack = {
  [ETab.Main]: TNavigatorScreenParams<TMainTab>
  [EStacks.Auth]: TNavigatorScreenParams<TAuthStack>
}
