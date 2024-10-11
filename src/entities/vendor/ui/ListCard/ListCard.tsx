import React from 'react'

import { EScreens } from '@/app/navigation'

import { FavoriteFeature } from '@/features/favorite'

import { useControlFavorite } from '@/features/favorite/hooks'

import { EFavoriteType } from '@/entities/favorite/models'

import { useNavigation } from '@/shared/hooks'
import { getPhotoUrl } from '@/shared/lib'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'

import { BodyM4SB, CaptionM1R, CaptionM1SB } from '@/shared/ui/styled/Text'

import { ActionWrapper, Container, StyledImage, TextWrapper } from './styles'

import { TListCardProps } from './types'

export const ListCard = ({
  booked = false,
  vendor,
  onRefresh = () => {},
  isDefSaved = false,
  ...item
}: TListCardProps) => {
  const { navigate } = useNavigation()
  const { onPressFavorite } = useControlFavorite({ id: vendor._id })
  const { name, city, address, phone, description, images } = vendor

  const isSaved =
    isDefSaved ||
    vendor?.favorite?.map(fav => fav.type).includes(EFavoriteType.saved) ||
    false

  const onItemPress = () => {
    navigate(EScreens.VendorsVendorProfile, { vendor })
  }

  const onDeleteFavorite = async () => {
    try {
      await onPressFavorite(true, EFavoriteType.favorite)

      onRefresh()
    } catch (e) {
      console.log('ListCard onDeleteFavorite error =>', e)
    }
  }
  return (
    <Container onPress={onItemPress} {...item}>
      <StyledImage
        source={{ uri: getPhotoUrl(images?.[0] || '', 'business') }}
      />
      <TextWrapper>
        <BodyM4SB>{name}</BodyM4SB>
        <CaptionM1R mTop="4px">
          {city}, {address}
        </CaptionM1R>
        <CaptionM1R>{phone}</CaptionM1R>
        <CaptionM1SB mTop="12px" numberOfLines={2}>
          {description}
        </CaptionM1SB>
      </TextWrapper>
      <ActionWrapper>
        {booked && (
          <Checkbox
            type="circle"
            size={23}
            active={true}
            onPress={onDeleteFavorite}
          />
        )}
        {!booked && (
          <FavoriteFeature.AddButton
            vendor={vendor._id}
            isFavorite={isSaved}
            onRefresh={onRefresh}
          />
        )}
      </ActionWrapper>
    </Container>
  )
}
