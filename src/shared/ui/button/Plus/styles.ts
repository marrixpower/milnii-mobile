import styled from 'styled-components/native'
import { EColors } from '../../styled'
import { Touchable } from '../../styled/Styled'

export const Container = styled(Touchable)<{ size: number }>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: 10.5px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${EColors.primary};
`
