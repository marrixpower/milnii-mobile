import { EColors } from '@/shared/ui/styled'
import { Touchable } from '@/shared/ui/styled/Styled'
import styled from 'styled-components/native'

export const AddButton = styled(Touchable)`
  height: 64px;
  width: 64px;
  border-radius: 10.5px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${EColors.primary};
`
