import styled from 'styled-components/native'

import { EColors } from '@/shared/ui/styled'
import { FlexWrapper, Touchable } from '@/shared/ui/styled/Styled'

export const Container = styled(Touchable)`
  height: 133px;
  padding: 16px;
  border-radius: 14px;
  background-color: ${EColors.beige_200};
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
`

export const StyledImage = styled.Image`
  width: 94px;
  height: 94px;
  border-radius: 14px;
`

export const TextWrapper = styled(FlexWrapper)`
  margin-left: 20px;
  width: 60%;
  flex-direction: column;
  align-items: flex-start;
`

export const ActionWrapper = styled.View`
  position: absolute;
  right: 20px;
  top: 20px;
`
