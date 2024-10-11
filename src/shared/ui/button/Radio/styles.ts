import styled from 'styled-components/native'
import { Touchable } from '../../styled/Styled'
import { EColors } from '../../styled'

export const TouchableContainer = styled(Touchable)`
  height: 25px;
  width: 25px;
  border-radius: 25px;
  border-width: 1px;
  border-color: ${EColors.primary};
  justify-content: center;
  align-items: center;
`

export const InnerCircle = styled.View`
  height: 18px;
  width: 18px;
  background-color: ${EColors.primary};
  border-radius: 18px;
`
