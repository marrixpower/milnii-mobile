import React from 'react'

import { Icon } from '../Icon'

import { EColors } from '../styled'

import { TouchableContainer } from './styles'
import { TCheckboxProps } from './types'

export const Checkbox = ({
  active = false,
  onPress = () => {},
  size = 13,
  type = 'square',
  style = {},
  icon = 'Done',
}: TCheckboxProps) => {
  // render
  return (
    <TouchableContainer
      style={style}
      size={size}
      type={type}
      onPress={onPress}
      active={active}>
      {active && <Icon name={icon} size={size / 2} fill={EColors.white} />}
    </TouchableContainer>
  )
}
