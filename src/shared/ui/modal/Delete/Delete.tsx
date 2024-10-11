import React from 'react'

import { useTranslation } from 'react-i18next'

import Modal from 'react-native-modal'

import { Button } from '../../button'
import { EColors } from '../../styled'
import { FlexWrapper } from '../../styled/Styled'
import { H3, BodyM2R, BodyM4SB } from '../../styled/Text'

import { ModalContent, styles } from './styled'
import { TDeleteModalProps } from './types'

export const Delete = ({
  setModalVisible = () => {},
  modalVisible = false,
  onDelete = () => {},
  title = '',
  description = '',
}: TDeleteModalProps) => {
  const { t } = useTranslation()
  return (
    <Modal
      onBackdropPress={() => setModalVisible(false)}
      isVisible={modalVisible}>
      <ModalContent>
        <H3 align="center">{title}</H3>
        <BodyM2R mTop="10px" align="center">
          {description}
        </BodyM2R>
        <FlexWrapper mTop="20px" justify="space-between">
          <Button.Standard
            onPress={() => setModalVisible(false)}
            style={styles.button_cancel}>
            <BodyM4SB color={EColors.primary}>
              {t('button.cancel').toUpperCase()}
            </BodyM4SB>
          </Button.Standard>
          <Button.Standard onPress={onDelete} style={styles.button_delete}>
            <BodyM4SB color={EColors.white}>
              {t('button.delete').toUpperCase()}
            </BodyM4SB>
          </Button.Standard>
        </FlexWrapper>
      </ModalContent>
    </Modal>
  )
}
