import { View } from 'react-native'

import styled, { css } from 'styled-components'

export const Background = styled(View)<{ color: string; isList: boolean }>`
  background-color: ${({ color }) => color};
  align-items: center;
  flex: 1;
  ${({ isList }) =>
    !!isList &&
    css`
      padding-bottom: ${({ theme: { instBottom } }) => instBottom}px;
    `}
`
