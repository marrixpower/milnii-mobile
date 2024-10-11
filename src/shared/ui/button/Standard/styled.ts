import { TouchableOpacity } from 'react-native'

import styled, { css } from 'styled-components'

import { EColors, Typography } from '../../styled'
import { MARGIN } from '../../utils'

import { TStyledButton, TStyledText } from './types'

export const StyledButton = styled(TouchableOpacity)<TStyledButton>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius}px;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-color: ${EColors.primary};
  border-width: ${({ hideBorder }) => (hideBorder ? 0 : 1.5)}px;

  ${props => MARGIN(props)}

  /* If disabled */
  ${({ disabled }) =>
    disabled &&
    css`
      /* Add you disabled styles */
      /*  background-color: ; */
    `};
`

export const StyledText = styled(Typography.BodyM1R)<TStyledText>`
  /* If transparent */
  ${({ color, disabled }) =>
    !disabled &&
    css`
      color: ${color};
    `}
  /* If disabled */
  ${({ disabled }) =>
    disabled &&
    css`
      /* Add you disabled styles */
      /* color: ${EColors.gray_999};*/
    `};
`

export const StyledSecondaryText = styled(Typography.BodyM2B)<TStyledText>`
  /* If transparent */
  ${({ color, disabled }) =>
    !disabled &&
    css`
      color: ${color};
    `}
  /* If disabled */
  ${({ disabled }) =>
    disabled &&
    css`
      /* Add you disabled styles */
      /* color: ${EColors.gray_999};*/
    `};
`
