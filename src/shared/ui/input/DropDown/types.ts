import { StyleProp, TextStyle, ViewStyle } from 'react-native'

import { TMargin } from '../../utils'

export type TDropDown = {
  style?: StyleProp<ViewStyle>
  error?: string
  value?: string
  list?: boolean
  containerStyle?: StyleProp<ViewStyle>
  selectedTextStyle?: StyleProp<TextStyle>
  placeholder?: string
  disable?: boolean
  onChange?: (value: string) => void
  items?: TDropDownDownItem[]
} & Partial<TContainer>

export type TDropDownDownItem = {
  value: string
  label: string
}

export type TContainer = {
  width: string
} & TMargin

export type TStyledInputContainer = {
  height: string
  hasError: boolean
}

export type TStyledInput = {
  hasLeftIcon: boolean
  hasRightIcon: boolean
}
