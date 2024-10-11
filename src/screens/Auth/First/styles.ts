import { hp } from '@/shared/lib/tools'
import { EColors } from '@/shared/ui/styled'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Logo = styled.Image`
  width: 227px;
  height: 173px;
  margin-top: ${hp(25)}px;
`

export const ButtonsWrapper = styled.View<{ bottom: number }>`
  bottom: ${({ bottom }) => bottom + 40}px;
  width: 100%;
  align-items: center;
  position: absolute;
`

export const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: EColors.beige_200,
    width: '70%',
  },
})
