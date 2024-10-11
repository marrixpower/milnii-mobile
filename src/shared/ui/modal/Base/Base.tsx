import React, { forwardRef, useImperativeHandle, useState } from 'react'

import { TouchableOpacity } from 'react-native'

import { View } from 'react-native'

import Modal from 'react-native-modal'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import { Icon } from '../../Icon'

import { Styled, Typography } from '../../styled'

import { CloseButton, ModalContainer, styles } from './styles'
import { TBaseModalRef, TBaseModalProps } from './types'

export const Base = forwardRef<TBaseModalRef, TBaseModalProps>(
  ({ children, modalViewStyle = {}, onClose, title }, ref) => {
    const [modalVisible, setModalVisible] = useState(false)

    const close = () => {
      setModalVisible(false)
      onClose?.()
    }

    const open = () => {
      setModalVisible(true)
    }

    useImperativeHandle(
      ref,
      () => ({
        open,
        close,
      }),
      [],
    )

    return (
      <Modal
        isVisible={modalVisible}
        statusBarTranslucent
        useNativeDriver
        useNativeDriverForBackdrop
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        deviceHeight={hp(120)}
        onDismiss={close}>
        <ModalContainer onPress={close}>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.modalView, modalViewStyle]}>
            <Styled.FlexWrapper>
              <Styled.FlexWrapper width={'100%'} justify={'space-between'}>
                {!!title && <Typography.H1>{title}</Typography.H1>}
                {!title && <View />}
                <CloseButton onPress={close}>
                  <Icon name="Close" size={24} />
                </CloseButton>
              </Styled.FlexWrapper>
            </Styled.FlexWrapper>
            <Styled.FlexWrapper>{children}</Styled.FlexWrapper>
          </TouchableOpacity>
        </ModalContainer>
      </Modal>
    )
  },
)
