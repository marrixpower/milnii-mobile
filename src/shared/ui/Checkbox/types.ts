import { StyleProp, ViewStyle } from 'react-native'

import { TIconsKeys } from '@assets/svg'

export type TCheckboxProps = {
  active?: boolean
  onPress?: () => void
  type?: 'square' | 'circle'
  icon?: TIconsKeys
  size?: number
  style?: StyleProp<ViewStyle>
}
