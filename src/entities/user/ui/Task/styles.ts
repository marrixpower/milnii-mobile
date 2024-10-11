import styled from 'styled-components/native'

import { EColors } from '@/shared/ui/styled'
import { Touchable } from '@/shared/ui/styled/Styled'
import { FLEX } from '@/shared/ui/utils'

export const Container = styled(Touchable)`
  border-radius: 14px;
  padding: 16px 19px;
  ${FLEX({})}
  justify-content: flex-start;
  background-color: ${EColors.beige_200};
  width: 100%;
`
