import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'

import { useTranslation } from 'react-i18next'

import { EScreens } from '@/app/navigation'

import { GuestsFeature } from '@/features/guests'

import { TGuest, TGuestGroped } from '@/entities/guests'

import { useNavigation } from '@/shared/hooks'
import { Accordion } from '@/shared/ui/Accordion'

import { styles } from './styles'
import { TGuestListProps } from './types'

export const List = ({ guests = [] }: TGuestListProps) => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()

  const onAddButtonPress = (guest: TGuest) => {
    navigate(EScreens.GuestsAddGuest, {
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

  const renderAccordionItem: ListRenderItem<TGuest> = ({ item }) => {
    return (
      <GuestsFeature.GuestListItem
        onAddButtonPress={() => onAddButtonPress(item)}
        {...item}
      />
    )
  }

  const renderItem: ListRenderItem<TGuestGroped> = ({ item }) => {
    return (
      <Accordion
        text1={item.group?.name || 'No Group'}
        text2={t('guests.guests_count', {
          count: item.count,
        })}
        children={
          <FlatList data={item.guests} renderItem={renderAccordionItem} />
        }
      />
    )
  }
  return (
    <>
      <FlatList
        style={styles.guest_list}
        data={guests}
        renderItem={renderItem}
      />
    </>
  )
}
