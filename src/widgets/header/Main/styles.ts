import { EColors } from '@/shared/ui/styled'
import { FlexWrapper, Touchable } from '@/shared/ui/styled/Styled'
import styled from 'styled-components/native'

export const Container = styled(FlexWrapper)`
  padding: 0px 27px 0px 44px;
  justify-content: space-between;
  z-index: 20;
`

export const EditButton = styled(Touchable)`
  height: 56px;
  width: 56px;
  border-radius: 56px;
  background-color: ${EColors.primary};
  justify-content: center;
  align-items: center;
  z-index: 10;
`
