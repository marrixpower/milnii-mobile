import React, { FC } from 'react'
import { LayoutChangeEvent } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import * as S from './styles'
import { TBottomBarProps } from './types'

export const BottomBar: FC<TBottomBarProps> = ({
  children,
  containerStyle = {},
  getHeight = () => {},
  pHorizontal = 12,
  pVertical = 8,
}) => {
  const { bottom } = useSafeAreaInsets()
  const handleLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout
    getHeight(height)
  }

  return (
    <S.Container
      onLayout={handleLayout}
      bottomInst={bottom}
      style={containerStyle}
      {...{ pHorizontal, pVertical }}>
      {children}
    </S.Container>
  )
}
