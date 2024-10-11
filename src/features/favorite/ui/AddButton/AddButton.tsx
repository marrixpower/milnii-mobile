import React from 'react'

import { EFavoriteType } from '@/entities/favorite/models'

import { Icon } from '@/shared/ui/Icon'
import { EColors, Styled } from '@/shared/ui/styled'

import { useControlFavorite } from '../../hooks'

import { TAddButton } from './types'

export const AddButton = ({
  isFavorite = false,
  vendor = '',
  size = 22,
  onRefresh = () => {},
}: TAddButton) => {
  const { onPressFavorite } = useControlFavorite({ id: vendor })

  const isFavoriteLocal = isFavorite

  const icon = isFavoriteLocal ? 'Favorite' : 'Heart'

  const onPress = async () => {
    if (!vendor) {
      return
    }

    await onPressFavorite(isFavoriteLocal, EFavoriteType.saved)

    onRefresh()
  }

  return (
    <Styled.Touchable onPress={onPress}>
      <Icon name={icon} fill={EColors.primary} size={size} />
    </Styled.Touchable>
  )
}
