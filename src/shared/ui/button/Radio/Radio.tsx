import React from 'react'
import { View } from 'react-native'

import { InnerCircle, TouchableContainer } from './styles'
import { TRadio } from './types'

export const Radio = ({ active, onPress }: TRadio) => {
  return (
    <TouchableContainer onPress={onPress}>
      {active && <InnerCircle />}
    </TouchableContainer>
  )
}
