import { useEffect, useState } from 'react'

import { TBudgetGroup } from '@/entities/budget'
import { BudgetService } from '@/entities/budget/services'

export const useGetBudgetGroups = () => {
  const [budgetGroup, setBudgetGroup] = useState<TBudgetGroup[]>([])

  const onAction = async () => {
    try {
      const {
        data: { docs },
      } = await BudgetService.getBudgetGroup({
        limit: 1000,
      })

      setBudgetGroup(docs)
    } catch (error) {
      console.log('useGetBudgetGroups error =>', error)
    }
  }

  useEffect(() => {
    onAction()
  }, [])

  return {
    onAction,
    budgetGroup,
  }
}
