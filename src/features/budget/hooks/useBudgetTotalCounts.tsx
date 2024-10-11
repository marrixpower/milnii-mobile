import { useEffect, useState } from 'react'

import { useIsFocused } from '@react-navigation/native'

import { EBudgetStatus } from '@/entities/budget'
import { BudgetService } from '@/entities/budget/services'

export const useBudgetTotalCounts = () => {
  const isFocused = useIsFocused()

  const [totalCount, setTotalCount] = useState<number>(0)
  const [done, setDone] = useState<number>(0)

  const getTotalCount = async () => {
    try {
      const {
        data: { totalCount: newTCConfirmed },
      } = await BudgetService.getBudget({
        status: EBudgetStatus.paid,
      })

      setDone(newTCConfirmed)

      const {
        data: { totalCount: newTC2 },
      } = await BudgetService.getBudget({})

      setTotalCount(newTC2)
    } catch (error) {
      console.log('useBudgetTotalCounts error =>', error)
    } finally {
    }
  }

  useEffect(() => {
    if (isFocused) {
      getTotalCount()
    }
  }, [isFocused])

  return {
    totalCount,
    done,
    getTotalCount,
  }
}
