import styled from 'styled-components'

import { FlexWrapper } from '@/shared/ui/styled/Styled'

export const ExpenseItem = styled(FlexWrapper)<{
  withoutPadding: boolean
}>`
  padding: 0px ${({ withoutPadding }) => (withoutPadding ? 0 : 23)}px;
  height: 53px;
  justify-content: space-between;
`
