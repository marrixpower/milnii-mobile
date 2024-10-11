import styled from 'styled-components/native'
import { Touchable } from '../styled/Styled'
import { EColors } from '../styled'

export const TouchableContainer = styled(Touchable)<{
  active: boolean
  size: number
  type: 'square' | 'circle'
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ active }) =>
    active ? EColors.primary : EColors.translation};
  border-radius: ${({ type }) => (type === 'circle' ? 40 : 4)}px;
  border-color: ${({ type }) =>
    type === 'circle' ? EColors.primary : EColors.grey_900};
  border-width: ${({ active }) => (active ? 0 : 1)}px;
  justify-content: center;
  align-items: center;
`
