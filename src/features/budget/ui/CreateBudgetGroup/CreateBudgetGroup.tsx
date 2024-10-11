import React, { useState } from 'react'

import { useTranslation } from 'react-i18next'
import Modal from 'react-native-modal'

import { BudgetService } from '@/entities/budget/services'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { EColors } from '@/shared/ui/styled'
import { FlexWrapper } from '@/shared/ui/styled/Styled'
import { BodyM4SB, H3 } from '@/shared/ui/styled/Text'

import { ModalContent, styles } from './styled'
import { TCreateBudgetGroupProps } from './types'

export const CreateBudgetGroup = ({
  open = false,
  setOpen = () => {},
  onRefresh = () => {},
}: TCreateBudgetGroupProps) => {
  const { t } = useTranslation()
  const [name, setName] = useState(``)

  const onCreate = async () => {
    try {
      if (!name) return
      await BudgetService.postBudgetGroup({ name })
      setName('')
      onRefresh()

      setOpen(false)
    } catch (error) {
      console.log(
        'CreateBudgetGroup error =>',
        JSON.stringify(error.response.data),
      )
    }
  }

  return (
    <Modal
      avoidKeyboard
      isVisible={open}
      onBackdropPress={() => setOpen(false)}>
      <ModalContent>
        <H3>{t('budget.new_expense_group')}</H3>
        <Input.Standard
          value={name}
          onChange={setName}
          mTop="19px"
          placeholder="Group name"
          minimal
        />
        <FlexWrapper mTop="16px" justify="space-between">
          <Button.Standard
            onPress={() => setOpen(false)}
            style={styles.button_cancel}>
            <BodyM4SB color={EColors.primary}>
              {t('button.cancel').toUpperCase()}
            </BodyM4SB>
          </Button.Standard>
          <Button.Standard onPress={onCreate} style={styles.button_delete}>
            <BodyM4SB color={EColors.white}>
              {t('button.add').toUpperCase()}
            </BodyM4SB>
          </Button.Standard>
        </FlexWrapper>
      </ModalContent>
    </Modal>
  )
}
