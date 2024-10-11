import React from 'react'

import { useTranslation } from 'react-i18next'

import { EScreens } from '@/app/navigation'

import { EBudgetStatus } from '@/entities/budget'

import { BudgetService } from '@/entities/budget/services'

import { useNavigation } from '@/shared/hooks'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { FlexWrapper, Touchable } from '@/shared/ui/styled/Styled'

import { BodyM2SB, BodyM1SB } from '@/shared/ui/styled/Text'

import { budgetPrice } from '../../utils'

import { ExpenseItem } from './styled'
import { TBudgetListItemProps } from './types'

export const BudgetListItem = ({
  status = EBudgetStatus.unpaid,
  name = '',
  estimatedCost = 0,
  finalCost = 0,
  _id = '',
  group,
  note,
  onRefresh = () => {},
  withoutPadding = false,
}: TBudgetListItemProps) => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const isUnpaid = status === EBudgetStatus.unpaid

  const onChangeStatus = async () => {
    if (!_id) return

    await BudgetService.patchBudget({
      id: _id,
      status: isUnpaid ? EBudgetStatus.paid : EBudgetStatus.unpaid,
    })

    onRefresh()
  }

  const onGoEdit = () => {
    navigate(EScreens.BudgetAddExpense, {
      id: _id,
      status,
      name,
      estimatedCost: estimatedCost + '',
      finalCost: finalCost + '',
      note,
      group: group,
    })
  }

  return (
    <Touchable onPress={onGoEdit}>
      <ExpenseItem {...{ withoutPadding }}>
        <FlexWrapper width={'40%'} justify="flex-start">
          <Checkbox
            size={23}
            type="circle"
            active={!isUnpaid}
            onPress={onChangeStatus}
          />
          <BodyM1SB numberOfLines={2} mLeft="12px">
            {name}
          </BodyM1SB>
        </FlexWrapper>
        <FlexWrapper width={'60%'} justify="flex-end">
          <BodyM2SB>
            {t(isUnpaid ? 'budget.est' : 'budget.paid', {
              value: budgetPrice(isUnpaid ? estimatedCost : finalCost),
            })}
          </BodyM2SB>
        </FlexWrapper>
      </ExpenseItem>
    </Touchable>
  )
}
