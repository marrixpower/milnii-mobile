import { EColors } from '@/shared/ui/styled'
import { FlexWrapper } from '@/shared/ui/styled/Styled'
import styled from 'styled-components/native'

export const Wrapper = styled(FlexWrapper)`
  padding: 0px 44px;
  background-color: ${EColors.beige_200};
  justify-content: space-between;
`

export const Logo = styled.Image`
  width: 131px;
  height: 36px;
`
