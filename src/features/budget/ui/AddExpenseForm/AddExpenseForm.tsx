import React, { useState, useContext } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRoute } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { LoaderContext } from '@/app/contexts/Loader'

import { EScreens } from '@/app/navigation'
import { TScreenQueryProps } from '@/app/navigation/types'

import { EBudgetStatus } from '@/entities/budget'
import { BudgetService } from '@/entities/budget/services'

import { useNavigation } from '@/shared/hooks'
import { dollarMask } from '@/shared/lib'
import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/Icon'
import { Input } from '@/shared/ui/input'
import { SelectGroup } from '@/shared/ui/SelectGroup'
import { EColors } from '@/shared/ui/styled'
import { Divider, FlexWrapper } from '@/shared/ui/styled/Styled'
import { BodyM2B, BodyM3SB, BodyM5B } from '@/shared/ui/styled/Text'

import { useGetBudgetGroups } from '../../hooks'

import { CreateBudgetGroup } from '../CreateBudgetGroup'

import { EstimatedCostWrapper, PaddingContainer, styles } from './styles'
import { TBudgetForm } from './types'
import { createBudgetFormValidation } from './validation'

export const AddExpenseForm = () => {
  const { t } = useTranslation()
  const { setLoading } = useContext(LoaderContext)
  const [selectGroupOpen, setSelectGroupOpen] = useState(false)
  const [newGroupModalOpen, setNewGroupModalOpen] = useState(false)

  const { budgetGroup, onAction } = useGetBudgetGroups()
  const { goBack } = useNavigation()

  const params = useRoute<TScreenQueryProps<EScreens.BudgetAddExpense>>().params

  const { control, handleSubmit } = useForm<TBudgetForm>({
    resolver: zodResolver(createBudgetFormValidation(t)),
    defaultValues: {
      estimatedCost: params?.estimatedCost || '0',
      finalCost: params?.finalCost || '0',
      group: params?.group || '',
      name: params?.name || '',
      note: params?.note || '',
    },
  })

  const isEdit = !!params?.id

  const onCrateBudget = async (
    data: TBudgetForm,
    newStatus?: EBudgetStatus,
  ) => {
    try {
      setLoading(true)

      const body = {
        ...data,
        estimatedCost: +data.estimatedCost.replace(/[$,]/g, ''),
        finalCost: +data.finalCost.replace(/[$,]/g, ''),
      }

      if (isEdit && params?.id) {
        await BudgetService.patchBudget({
          ...body,
          status: newStatus,
          id: params.id,
        })
      } else {
        await BudgetService.postBudget({
          ...body,
          status: EBudgetStatus.unpaid,
        })
      }

      goBack()
    } catch (error) {
      console.log('onCrateBudget error =>', error)
    } finally {
      setLoading(false)
    }
  }

  const onPresCreate = (data: TBudgetForm) => {
    onCrateBudget(data)
  }

  const onPressMark = (data: TBudgetForm) => {
    const isStatus = !!params.status
    onCrateBudget(
      data,
      isStatus && params.status === EBudgetStatus.paid
        ? EBudgetStatus.unpaid
        : EBudgetStatus.paid || undefined,
    )
  }

  return (
    <>
      <PaddingContainer mBottom={'24px'}>
        <Controller
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input.Standard
              inputContainerStyle={styles.name_wrapper}
              style={styles.name_container}
              placeholder={t('budget.name_of_expense')}
              inputStyle={styles.name_input}
              error={error?.message}
              {...{ onChange, value }}
            />
          )}
          name={'name'}
        />
      </PaddingContainer>

      <Controller
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <SelectGroup
            title="Select Group"
            data={budgetGroup}
            open={selectGroupOpen}
            onClose={() => setSelectGroupOpen(false)}
            onTitlePress={() => setSelectGroupOpen(prev => !prev)}
            onAddPress={() => setNewGroupModalOpen(true)}
            addText="+ New Group"
            error={error?.message}
            {...{ onChange, value }}
          />
        )}
        name={'group'}
      />
      <PaddingContainer>
        <Controller
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <EstimatedCostWrapper>
                <BodyM3SB>{t('budget.estimated_cost_alt')}</BodyM3SB>

                <>
                  <Input.Standard
                    {...{ value, onChange }}
                    onChange={cost =>
                      onChange(cost.replace(/\$0(\d+)/, '$$$1'))
                    }
                    mask={dollarMask}
                    placeholder="$0"
                    style={styles.cost_input_wrapper}
                    inputContainerStyle={styles.cost_input_container}
                    inputStyle={styles.cost_input}
                    placeholderTextColor={EColors.dark_grey_300}
                  />
                </>
              </EstimatedCostWrapper>

              {!!error && (
                <BodyM5B
                  mTop={'5px'}
                  mLeft={'8px'}
                  mBottom={'10px'}
                  color={EColors.primary}>
                  {error?.message}
                </BodyM5B>
              )}
            </>
          )}
          name={'estimatedCost'}
        />

        <Controller
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <EstimatedCostWrapper>
                <BodyM3SB>{t('budget.final_cost')}</BodyM3SB>

                <Input.Standard
                  {...{ value }}
                  onChange={cost => onChange(cost.replace(/\$0(\d+)/, '$$$1'))}
                  mask={dollarMask}
                  placeholder="$0"
                  style={styles.cost_input_wrapper}
                  inputContainerStyle={styles.cost_input_container}
                  inputStyle={styles.cost_input}
                  placeholderTextColor={EColors.dark_grey_300}
                />
              </EstimatedCostWrapper>
              {!!error && (
                <BodyM5B
                  mTop={'5px'}
                  mLeft={'8px'}
                  mBottom={'10px'}
                  color={EColors.primary}>
                  {error?.message}
                </BodyM5B>
              )}
            </>
          )}
          name={'finalCost'}
        />
      </PaddingContainer>

      <Divider mTop={'20px'} />
      <PaddingContainer>
        <Controller
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <FlexWrapper mTop="24px" justify="flex-start">
                <Icon name="Description" size={18} />

                <Input.Standard
                  {...{ value, onChange }}
                  mLeft="12px"
                  style={styles.notes_input_wrapper}
                  inputContainerStyle={styles.notes_input_container}
                  placeholder="Additional notes"
                  placeholderTextColor={EColors.dark_grey_300}
                />
              </FlexWrapper>

              {!!error && (
                <BodyM5B
                  mTop={'5px'}
                  mLeft={'8px'}
                  mBottom={'10px'}
                  color={EColors.primary}>
                  {error?.message}
                </BodyM5B>
              )}
            </>
          )}
          name={'note'}
        />
        <Button.Standard mTop="37px" onPress={handleSubmit(onPresCreate)}>
          <BodyM2B color={EColors.white}>
            {t('button.save').toUpperCase()}
          </BodyM2B>
        </Button.Standard>
        {!!isEdit && (
          <Button.Standard
            onPress={handleSubmit(onPressMark)}
            mTop="16px"
            style={styles.button_paid}>
            <BodyM2B color={EColors.primary}>
              {t(
                params.status === EBudgetStatus.paid
                  ? 'budget.mark_as_unpaid'
                  : 'budget.mark_as_paid',
              ).toUpperCase()}
            </BodyM2B>
          </Button.Standard>
        )}
      </PaddingContainer>

      <CreateBudgetGroup
        onRefresh={onAction}
        setOpen={setNewGroupModalOpen}
        open={newGroupModalOpen}
      />
    </>
  )
}
