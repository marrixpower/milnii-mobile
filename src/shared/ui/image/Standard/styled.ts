import FastImage from 'react-native-fast-image'
import styled from 'styled-components'

import { MARGIN } from '../../utils'

import { TStyledImage } from './types'

export const StyledImage = styled(FastImage)<TStyledImage>`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  border-radius: ${({ r }) => r}px;

  ${props => MARGIN(props)};
`
