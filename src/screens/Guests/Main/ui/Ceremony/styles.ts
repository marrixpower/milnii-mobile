import styled, { css } from 'styled-components/native'

import { EColors } from '@/shared/ui/styled'
import { Touchable } from '@/shared/ui/styled/Styled'

export const TouchableContainer = styled(Touchable)<{
  color: EColors
  isSelected: boolean
}>`
  height: 82.5px;
  width: 129px;
  background-color: ${({ color }) => color};
  align-items: center;
  justify-content: center;
  border-radius: 12px;

  ${({ isSelected }) =>
    !isSelected &&
    css`
      border: 1px solid ${EColors.primary};
    `}
`
