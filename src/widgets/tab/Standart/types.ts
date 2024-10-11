import { TIconsKeys } from '@assets/svg'

import { EStacks } from '@/app/navigation'

export type KeysOfEStacks =
  | EStacks.Home
  | EStacks.Main
  | EStacks.Auth
  | EStacks.Budget
  | EStacks.Tasks
  | EStacks.More
  | EStacks.Vendors

export type TUseTabs = {
  title: string
  Icon: TIconsKeys
  ActiveIcon: TIconsKeys
}
