import React, { ReactNode } from 'react'
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputKeyPressEventData,
  TextInputProps,
  ViewStyle,
} from 'react-native'

import { MaskArray } from 'react-native-mask-input'

import { TIconsKeys } from '@assets/svg'

import { TIconProps } from '../../Icon/types'
import { TMargin } from '../../utils'

export type TStandard = {
  label?: string
  style?: StyleProp<ViewStyle>
  inputContainerStyle?: StyleProp<ViewStyle>
  placeholder?: string
  error?: string
  value?: string
  LeftIcon?: TIconsKeys
  RightIcon?: TIconsKeys
  RightIconComponent?: () => ReactNode
  onChange?: (text: string) => void
  onPress?: () => void
  onPressRightIcon?: () => void
  notRequired?: boolean
  leftIconProps?: Omit<TIconProps, 'name'>
  rightIconProps?: Omit<TIconProps, 'name'>
  withSwitch?: boolean
  keyboardType?: TextInputProps['keyboardType']
  disabled?: boolean
  multiline?: boolean
  autoFocus?: boolean
  onSubmitEditing?: () => void
  autoComplete?: TextInputProps['autoComplete']
  withValidator?: boolean
  onFocus?: () => void
  onBlur?: () => void
  isTouched?: boolean
  minimal?: boolean
  placeholderTextColor?: string
  inputStyle?: TextInputProps['style']
  mask?: MaskArray | ((value?: string) => MaskArray)
  maxLength?: number | undefined
  ref?: React.RefObject<TextInput>
  onKeyPress?: (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => void
} & Partial<TContainer> &
  Pick<Partial<TStyledInputContainer>, 'height' | 'maxHeight'>

export type TContainer = {
  width: string
  disabled: boolean
  minimal: boolean
} & TMargin

export type TStyledInputContainer = {
  height: string
  hasError: boolean
  disabled: boolean
  multiline: boolean
  maxHeight: string
}

export type TStyledInput = {
  hasLeftIcon: boolean
  hasRightIcon: boolean
}
