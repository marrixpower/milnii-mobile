import { Dimensions } from 'react-native'

export const cardCol = 2
export const padding = 44
export const cardHorizontalDivider = 16
export const cardVerticalDivider = 20
export const cardSize =
  (Dimensions.get('screen').width - padding * 2 - cardHorizontalDivider) /
  cardCol
