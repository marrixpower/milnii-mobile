import { EStacks } from '@/app/navigation'

import { KeysOfEStacks, TUseTabs } from './types'

export const useTabs = () => {
  const tabs: Record<KeysOfEStacks, TUseTabs> = {
    [EStacks.Home]: {
      title: 'First page',
      Icon: 'Home',
      ActiveIcon: 'HomeActive',
    },
    [EStacks.Vendors]: {
      title: 'Vendors',
      Icon: 'VendorsTab',
      ActiveIcon: 'VendorsTabActive',
    },
    [EStacks.Tasks]: {
      title: 'Tasks',
      Icon: 'TasksTab',
      ActiveIcon: 'TasksTabActive',
    },
    [EStacks.Budget]: {
      title: 'Budget',
      Icon: 'Saved',
      ActiveIcon: 'SavedActive',
    },
    [EStacks.More]: {
      title: 'More',
      Icon: 'More',
      ActiveIcon: 'MoreActive',
    },
  }

  return { tabs }
}
