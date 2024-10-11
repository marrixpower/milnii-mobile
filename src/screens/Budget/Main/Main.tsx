import React from 'react'

import { FlatList, ListRenderItem } from 'react-native'

import { useTranslation } from 'react-i18next'

import { EScreens } from '@/app/navigation'

import { Header } from '@/widgets/header'

import { BudgetFeatures, budgetPrice } from '@/features/budget'
import { useGetBudgetGrouped } from '@/features/budget/hooks'

import { TBudget, TBudgetGrouped } from '@/entities/budget'

import { useNavigation } from '@/shared/hooks'

import { Accordion } from '@/shared/ui/Accordion'
import { Background } from '@/shared/ui/background'
import { Icon } from '@/shared/ui/Icon'
import { Input } from '@/shared/ui/input'
import { EColors } from '@/shared/ui/styled'
import { Hr } from '@/shared/ui/styled/Styled'
import { BodyL2R, BodyL4R, BodyM3B } from '@/shared/ui/styled/Text'

import {
  AddExpenseTouchable,
  Cost,
  CostWrapper,
  InputWrapper,
  PlusWrapper,
  styles,
} from './styles'

export const Main = () => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const onAddExpensePress = () => {
    navigate(EScreens.BudgetAddExpense)
  }
  const {
    budgets,
    name,
    setName,
    totalEstimatedPrice,
    totalFinalPrice,
    onAction,
  } = useGetBudgetGrouped()

  const renderBudget: ListRenderItem<TBudget> = ({ item }) => {
    return <BudgetFeatures.BudgetListItem {...item} onRefresh={onAction} />
  }

  const renderItem: ListRenderItem<TBudgetGrouped> = ({ item }) => {
    return (
      <Accordion
        text1={item.group?.name || ''}
        text2={`${budgetPrice(item.estimatedCost)} - ${budgetPrice(
          item.finalCost,
        )}`}>
        <FlatList
          showsVerticalScrollIndicator={false}
          bounces={false}
          data={item.budget}
          // keyExtractor={ext => ext._id}
          renderItem={renderBudget}
          ListFooterComponent={() => (
            <>
              <Hr />
              <AddExpenseTouchable onPress={onAddExpensePress}>
                <PlusWrapper>
                  <Icon name="Plus" stroke={EColors.grey_200} size={12} />
                </PlusWrapper>
                <BodyL2R mLeft="12px">{t('budget.new_expense')}</BodyL2R>
              </AddExpenseTouchable>
            </>
          )}
          ItemSeparatorComponent={() => <Hr />}
        />
      </Accordion>
    )
  }
  return (
    <>
      <Header.Nested
        title={t('home.links.budget')}
        rightIcon="Plus"
        onRightIconPress={onAddExpensePress}
      />
      <Background.Standard style={styles.main}>
        <CostWrapper>
          <Cost>
            <BodyM3B color={EColors.beige_200}>
              {t('budget.estimated_cost').toUpperCase()}
            </BodyM3B>
            <BodyL4R color={EColors.beige_200} mTop="3px">
              {budgetPrice(totalEstimatedPrice)}
            </BodyL4R>
          </Cost>
          <Cost>
            <BodyM3B color={EColors.beige_200}>
              {t('budget.final_cost').toUpperCase()}
            </BodyM3B>
            <BodyL4R color={EColors.beige_200} mTop="3px">
              {budgetPrice(totalFinalPrice)}
            </BodyL4R>
          </Cost>
        </CostWrapper>
        <InputWrapper>
          <Input.Standard
            minimal
            value={name}
            onChange={setName}
            mTop="16px"
            placeholder={t('budget.search')}
          />
        </InputWrapper>
        <FlatList
          style={styles.list}
          keyExtractor={item => item._id}
          data={budgets}
          renderItem={renderItem}
        />
      </Background.Standard>
    </>
  )
}
