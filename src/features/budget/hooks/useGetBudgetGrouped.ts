import { useCallback, useEffect, useState } from 'react'

import { useIsFocused } from '@react-navigation/native'

import _ from 'lodash'

import { TBudgetGrouped } from '@/entities/budget'
import { BudgetService } from '@/entities/budget/services'

export const useGetBudgetGrouped = () => {
  const [budgets, setBudgets] = useState<TBudgetGrouped[]>([])
  const [name, setName] = useState('')
  const isFocused = useIsFocused()

  const [totalEstimatedPrice, setTotalEstimatedPrice] = useState(0)
  const [totalFinalPrice, setTotalFinalPrice] = useState(0)

  const onAction = async () => {
    try {
      console.log('name =>', name)
      const { data } = await BudgetService.getBudgetGroped({ name })

      setTotalEstimatedPrice(
        data.reduce((acc, item) => acc + item.estimatedCost, 0),
      )

      setTotalFinalPrice(data.reduce((acc, item) => acc + item.finalCost, 0))

      setBudgets(data)
    } catch (error) {
      console.log('useGetBudgetGrouped error =>', error)
    }
  }

  const debounce = useCallback(_.debounce(onAction, 500), [name])

  useEffect(() => {
    debounce()
  }, [name])

  useEffect(() => {
    isFocused && onAction()
  }, [isFocused])

  return {
    onAction,
    budgets,
    setName,
    name,
    totalEstimatedPrice,
    totalFinalPrice,
  }
}
