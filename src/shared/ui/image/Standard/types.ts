import { ImageSourcePropType } from 'react-native'

import { FastImageProps } from 'react-native-fast-image'

import { imageUrl } from '@/shared/lib/config'

import { TMargin } from '../../utils'

export type TImageStandard = TMargin & {
  source?: string | null
  type?: keyof typeof imageUrl

  pngSource?: ImageSourcePropType

  style?: FastImageProps['style']
  resizeMode?: FastImageProps['resizeMode']
} & TStylesShimmer

export type TStylesShimmer = {
  width: string
  height: string
  borderRadius: number
}

export type TStyledImage = {
  w: string
  h: string
  r: number
} & TMargin
