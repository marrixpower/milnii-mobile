import { EColors } from '@/shared/ui/styled'
import { Touchable } from '@/shared/ui/styled/Styled'
import styled from 'styled-components/native'

export const StyledTouchable = styled(Touchable)<{ active: boolean }>`
  height: 28px;
  border-width: 1px;
  border-color:${({ active }) => (active ? EColors.translation : EColors.black)}
  border-radius: 15px;
  padding: 0px 13px;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ active }) =>
    active ? EColors.primary : EColors.translation};
`
