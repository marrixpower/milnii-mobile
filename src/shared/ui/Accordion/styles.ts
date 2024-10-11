import styled from 'styled-components/native'
import { Touchable } from '../styled/Styled'

export const TouchableHeader = styled(Touchable)`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 55px;
  padding: 0px 23px;
`

export const IconWrapper = styled.View<{ open: boolean }>`
  transform: rotate(${({ open }) => (open ? 180 : 0)}deg);
`
