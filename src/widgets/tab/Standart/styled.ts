import { View, TouchableOpacity, StyleSheet } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/ui/styled'
import { isIos } from '@/shared/lib'

export const styles = StyleSheet.create({
  shadow: {
    width: '100%',
  },
})

export const Container = styled(View)<{ bottom: number }>`
  flex-direction: row;
  padding-top: 22px;
  padding-bottom: ${({ bottom }) => (isIos ? 0 : 20)}px;
  padding-left: 28px;
  padding-right: 28px;
  background-color: ${EColors.white};
  justify-content: space-between;
  border-top-width: 0.7px;
  border-top-color: ${EColors.grey_200};
`

export const StyledTabButton = styled(TouchableOpacity)`
  flex: 1;
`
