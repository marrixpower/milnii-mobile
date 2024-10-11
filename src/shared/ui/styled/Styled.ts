import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

import styled, { css } from 'styled-components'

import { wp } from '@/shared/lib'

import { MARGIN, TMargin } from '../utils'

import { EColors } from './colors'
import { TFlexWrapper, THr } from './types'

export const FlexWrapper = styled(View)<TFlexWrapper>`
  display: flex;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  max-width: 100%;

  ${props => MARGIN(props)}
`

export const Touchable = styled(TouchableOpacity).attrs<
  TouchableOpacityProps & TMargin
>(props => ({
  activeOpacity: props.activeOpacity || 0.8,
  ...props,
}))<TMargin>`
  z-index: 10;
  ${props => MARGIN(props)}
`

export const Hr = styled(View)<THr>`
  width: 100%;
  height: 1px;
  background-color: ${EColors.grey_200};

  ${({ vertical }) =>
    vertical &&
    css`
      width: 1px;
      height: 100%;
    `}

  ${props => MARGIN(props)}
`

export const Divider = styled(Hr)`
  left: -44px;
  width: ${wp(100) + 44}px;
  height: 1px;
  background-color: ${EColors.grey_200};
  z-index: -1;
`
