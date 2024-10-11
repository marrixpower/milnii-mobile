import React, { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { EColors } from '../../styled'

import { Background } from './styled'

type TStandard = {
  color?: EColors
  children?: ReactNode
  style?: StyleProp<ViewStyle>
  pHorizontal?: number
  isList?: boolean
}

export const Standard = ({
  children,
  color = EColors.white,
  pHorizontal = 0,
  isList = false,
  ...props
}: TStandard) => {
  return (
    <Background
      {...{ isList, color }}
      {...props}
      style={[{ paddingHorizontal: pHorizontal }, props.style]}>
      {children}
    </Background>
  )
}
