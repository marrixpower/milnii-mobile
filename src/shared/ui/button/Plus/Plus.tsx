import React from 'react'

import { Icon } from '../../Icon'

import { EColors } from '../../styled'

import { Container } from './styles'
import { TPlusProps } from './types'

export const Plus = ({ onPress = () => {}, size = 64 }: TPlusProps) => {
  return (
    <Container onPress={onPress} size={size}>
      <Icon stroke={EColors.primary} name="Plus" size={size / 3.2} />
    </Container>
  )
}
