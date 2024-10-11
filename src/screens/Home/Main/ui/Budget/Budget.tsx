import React, { useEffect, useState } from 'react'

import { FlatList, ListRenderItem } from 'react-native'

import { useIsFocused } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { EScreens, EStacks } from '@/app/navigation'

import { BudgetFeatures } from '@/features/budget'

import { EBudgetStatus, TBudget } from '@/entities/budget'
import { BudgetService } from '@/entities/budget/services'
import { UserEntity } from '@/entities/user'

import { useNavigation } from '@/shared/hooks'
import { BodyM2R } from '@/shared/ui/styled/Text'

type Props = {
  getTC?: () => void
}

export const Budget = ({ getTC = () => {} }: Props) => {
  const { navigate } = useNavigation()
  const { t } = useTranslation()
  const isFocused = useIsFocused()
  const [budgets, setBudgets] = useState<TBudget[]>([])

  const getAction = () => {
    BudgetService.getBudget({ limit: 3, status: EBudgetStatus.unpaid }).then(
      data => {
        setBudgets(data.data.docs)
        getTC()
      },
    )
  }

  useEffect(() => {
    isFocused && getAction()
  }, [isFocused])

  const onBudgetPress = () => {
    navigate(EStacks.Budget, { screen: EScreens.BudgetMain, params: {} })
  }

  const renderItem: ListRenderItem<TBudget> = ({ item }) => {
    return (
      <BudgetFeatures.BudgetListItem
        withoutPadding
        {...item}
        onRefresh={getAction}
      />
    )
  }

  return (
    <UserEntity.HomeSection
      title={t('home.budget.title')}
      buttonText={t('home.budget.button')}
      onPress={onBudgetPress}>
      <FlatList
        data={budgets}
        ListEmptyComponent={() => (
          <BodyM2R mTop="15px">{t('home.budget.desc')}</BodyM2R>
        )}
        renderItem={renderItem}
      />
    </UserEntity.HomeSection>
  )
}
