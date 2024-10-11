import { Platform } from 'react-native'
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen'

export const wp = widthPercentageToDP
export const hp = heightPercentageToDP

export const isIos = Platform.OS === 'ios'
