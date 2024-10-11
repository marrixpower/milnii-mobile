import React from 'react'

import { Animated } from 'react-native'

import { ExpandingDot } from 'react-native-animated-pagination-dots'
import Carousel from 'react-native-reanimated-carousel'

import { getPhotoUrl } from '@/shared/lib'
import { EColors } from '@/shared/ui/styled'

import {
  carouselHeight,
  carouselWidth,
  scrollAnimationDuration,
} from './consts'
import { CarouselImage, styles, Container } from './styles'
import { TVendorSliderProps } from './types'

export const Slider = ({ images = [] }: TVendorSliderProps) => {
  const scrollX = React.useRef(new Animated.Value(0)).current

  const onProgressChange = (offsetProgress: number) => {
    Animated.timing(scrollX, {
      toValue: Math.abs(offsetProgress),
      useNativeDriver: false,
      duration: 0,
    }).start()
  }

  const data = images.map(item => getPhotoUrl(item, 'business'))
  return (
    <Container>
      <Carousel
        loop
        width={carouselWidth}
        height={carouselHeight}
        onProgressChange={onProgressChange}
        data={data}
        scrollAnimationDuration={scrollAnimationDuration}
        renderItem={({ item }) => <CarouselImage source={{ uri: item }} />}
      />

      <ExpandingDot
        data={data}
        expandingDotWidth={8}
        scrollX={scrollX}
        activeDotColor={EColors.primary}
        inActiveDotColor={EColors.translation}
        inActiveDotOpacity={1}
        dotStyle={styles.dotStyle}
        containerStyle={styles.containerStyle}
      />
    </Container>
  )
}
