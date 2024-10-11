import { StyleSheet, View } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import MaskInput from 'react-native-mask-input'
import styled, { css } from 'styled-components'

import { isIos } from '@/shared/lib'

import { EColors } from '../../styled'
import { EFonts, FONT, MARGIN } from '../../utils'

import { TContainer, TStyledInput, TStyledInputContainer } from './types'

export const Container = styled(View)<TContainer>`
  width: ${({ width }) => width};
  align-items: flex-start;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
    `}
  ${props => MARGIN(props)};

  border-radius: ${({ minimal }) => (minimal ? '10px' : '0px')};
  border-width: ${({ minimal }) => (minimal ? '1px' : '0px')};
  padding: ${({ minimal }) => (minimal ? '0px 10px' : '0px')};
  border-color: ${({ minimal }) =>
    minimal ? EColors.text_grey_100 : EColors.dark_grey_300};
  border-bottom-width: 1px;
  border-bottom-color: ${({ minimal }) =>
    minimal ? EColors.text_grey_100 : EColors.dark_grey_300};
`
//prettier-ignore
export const StyledTextInputContainer = styled(TouchableOpacity)<TStyledInputContainer>`
  display: flex;
  flex-direction: row;
  
  
  width: 100%;

  ${({multiline, height, maxHeight}) =>multiline
? css`
  min-height: ${height};
  max-height: ${maxHeight};
  `:
  css`
  height: ${height};
` }
  


   
  border-radius: 10px;
  background-color: ${EColors.translation};

  /* ${FONT({})} */
  /* padding:0px 12px; */


  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${EColors.primary};
    `}


`
export const StyledTextInput = styled(MaskInput)<TStyledInput>`
  margin-left: ${({ hasLeftIcon }) => (hasLeftIcon ? '11px' : '0px')};
  margin-right: ${({ hasRightIcon }) => (hasRightIcon ? '11px' : '0px')};
  /* height: 100%; */
  padding: 0px 0px;
  ${FONT({ size: '13px', weight: '500', font: EFonts.monserratSemiBold })};
`

export const InputContainer = styled(View)<{ minimal: boolean }>`
  flex: 1;

  justify-content: ${({ minimal }) => (minimal ? 'center' : 'flex-start')};
  padding: ${({ minimal }) => (minimal ? '0px 0px' : '0px')};
`

export const styles = StyleSheet.create({
  padding: {
    paddingRight: 5,
  },
})

export const Validator = styled(View)<{ isTouched: boolean; error: boolean }>`
  margin-right: 5px;
  border-width: 1px;
  border-color: ${({ isTouched, error }) =>
    isTouched || error ? EColors.translation : EColors.dark_grey_300};
  width: 18px;
  height: 18px;
  border-radius: 5px;
  justify-content: center;
  top: ${isIos ? 0 : 10}px;
  align-items: center;
  background-color: ${({ isTouched, error }) =>
    isTouched && error
      ? EColors.primary
      : error
      ? EColors.primary
      : isTouched && !error
      ? EColors.green
      : EColors.translation};
`
