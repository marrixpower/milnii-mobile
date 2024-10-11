import { StyleSheet, View, Image } from 'react-native'

import styled from 'styled-components'

import { EColors } from '@/shared/ui/styled'

import { carouselHeight, carouselItemWidth } from './consts'

export const CarouselImage = styled(Image)`
  height: ${carouselHeight}px;
  width: ${carouselItemWidth}px;
  align-self: center;
`

export const Container = styled(View)`
  height: ${carouselHeight + 20}px;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const styles = StyleSheet.create({
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 2,
    borderWidth: 0.5,
    borderColor: EColors.primary,
  },
  containerStyle: {
    top: carouselHeight + 8,
  },
})
