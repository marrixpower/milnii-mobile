import { StyleSheet, View } from 'react-native'

import styled from 'styled-components'

import { EColors, Typography } from '@/shared/ui/styled'
import { BodyM4R } from '@/shared/ui/styled/Text'

export const Container = styled(View)`
  flex-direction: column;
  align-items: center;

  justify-content: center;
`

export const Title = styled(BodyM4R)`
  font-size: 11px;
  margin-top: 7px;
`

export const CountContainer = styled(View)`
  width: 15px;
  height: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  align-self: flex-end;
  padding-left: 1px;
  top: 0;
  z-index: 10;
  border-radius: 100px;
  background-color: ${EColors.primary};
`

export const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 0,
  },
  text: {
    lineHeight: 13,
  },
})
