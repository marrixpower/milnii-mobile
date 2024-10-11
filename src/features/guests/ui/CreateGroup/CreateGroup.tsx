import React, { useState } from 'react'

import { useTranslation } from 'react-i18next'
import Modal from 'react-native-modal'

import { GuestsService } from '@/entities/guests/services'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { EColors } from '@/shared/ui/styled'
import { FlexWrapper } from '@/shared/ui/styled/Styled'
import { BodyM4SB, H3 } from '@/shared/ui/styled/Text'

import { ModalContent, styles } from './styled'
import { TCreateGroupProps } from './types'

export const CreateGroup = ({
  newGroupModalOpen = false,
  setNewGroupModalOpen = () => {},
  onRefresh = () => {},
}: TCreateGroupProps) => {
  const { t } = useTranslation()
  const [name, setName] = useState('')

  const onCreate = async () => {
    try {
      if (!name) return
      await GuestsService.postGuestGroups({ name })

      setNewGroupModalOpen(false)

      onRefresh()
    } catch (error) {
      console.log('CreateGroup error =>', error)
    }
  }

  return (
    <Modal
      avoidKeyboard
      isVisible={newGroupModalOpen}
      onBackdropPress={() => setNewGroupModalOpen(false)}>
      <ModalContent>
        <H3>{t('guests.new_guest_group')}</H3>
        <Input.Standard
          mTop="19px"
          value={name}
          onChange={setName}
          placeholder="Group name"
          minimal
        />
        <FlexWrapper mTop="16px" justify="space-between">
          <Button.Standard
            onPress={() => setNewGroupModalOpen(false)}
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
