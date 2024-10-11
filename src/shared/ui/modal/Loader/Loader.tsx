import React from 'react'
import { ActivityIndicator } from 'react-native'

import ModalView from 'react-native-modal'

import { hp } from '@/shared/lib'

import { EColors } from '../../styled'

export const Loader = () => {
  return (
    <ModalView
      isVisible={true}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      backdropOpacity={0.5}
      statusBarTranslucent={true}
      deviceHeight={hp(120)}
      useNativeDriver>
      <ActivityIndicator size="large" color={EColors.primary} />
    </ModalView>
  )
}
