import React, { useEffect, useState } from 'react'

import { FlatList, ListRenderItem } from 'react-native'

import { useIsFocused } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { EScreens, EStacks } from '@/app/navigation'

import { GuestsFeature } from '@/features/guests'

import { EGuestStatus, TGuest } from '@/entities/guests'
import { GuestsService } from '@/entities/guests/services'
import { UserEntity } from '@/entities/user'

import { useNavigation } from '@/shared/hooks'
import { BodyM2R } from '@/shared/ui/styled/Text'

type Props = {
  getTC?: () => void
}

export const Guests = ({ getTC = () => {} }: Props) => {
  const { navigate } = useNavigation()
  const { t } = useTranslation()
  const isFocused = useIsFocused()
  const [guests, setGuests] = useState<TGuest[]>([])

  const getAction = () => {
    GuestsService.getGuests({ limit: 3, status: EGuestStatus.pending }).then(
      data => {
        setGuests(data.data.docs)
        getTC()
      },
    )
  }

  useEffect(() => {
    isFocused && getAction()
  }, [isFocused])

  const onGuestsPress = () => {
    navigate(EStacks.Guests)
  }

  const onAddButtonPress = (guest: TGuest) => {
    navigate(EScreens.HomeGuests, {
      id: guest._id,
      persons: guest.persons,
      group: guest.group,
      email: guest.email,
      phone: guest.phone,
      address: guest.address,
      postalCode: guest.postalCode,
      note: guest.note,
      status: guest.status,
      invites: guest.invites,
    })
  }

  const renderItem: ListRenderItem<TGuest> = ({ item }) => {
    return (
      <GuestsFeature.GuestListItem
        withoutPadding
        onAddButtonPress={() => onAddButtonPress(item)}
        {...item}
      />
    )
  }
  return (
    <UserEntity.HomeSection
      title={t('home.guests.title')}
      buttonText={t('home.guests.button')}
      onPress={onGuestsPress}>
      <FlatList
        data={guests}
        ListEmptyComponent={() => (
          <BodyM2R mTop="15px">{t('home.guests.desc')}</BodyM2R>
        )}
        renderItem={renderItem}
      />
    </UserEntity.HomeSection>
  )
}
