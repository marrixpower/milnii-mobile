import React, { useState } from 'react'

import { FlatList, ListRenderItem } from 'react-native'

import { useTranslation } from 'react-i18next'

import { EScreens } from '@/app/navigation'

import { Header } from '@/widgets/header'

import { useGetGuest } from '@/features/guests/hooks/useGetGuest'

import { EGuestStatus } from '@/entities/guests'

import { useNavigation } from '@/shared/hooks'
import { Background } from '@/shared/ui/background'
import { Input } from '@/shared/ui/input'

import { PaddingContainer, Separator, styles } from './styles'
import { Ceremony, List } from './ui'

const ceremonyData = [
  EGuestStatus.confirmed,
  EGuestStatus.pending,
  EGuestStatus.declined,
]

export const Main = () => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const onAddButtonPress = () => {
    navigate(EScreens.GuestsAddGuest, {})
  }

  const [status, setStatus] = useState<EGuestStatus>()

  const { guests, name, setName, totalCountGuest } = useGetGuest()

  const renderItem: ListRenderItem<EGuestStatus> = ({ item }) => {
    const filtered = guests
      .flatMap(guest => guest.guests)
      .filter(guest => guest.status === item).length
    return (
      <Ceremony
        value={item}
        selectedValue={status}
        total={totalCountGuest}
        filled={filtered}
        onPress={setStatus}
      />
    )
  }

  const filteredData = () => {
    if (status) {
      const filtered = guests
        .flatMap(guest => guest.guests)
        .filter(guest => guest.status === status)

      return guests
        .map(guest => ({
          ...guest,
          guests: filtered.filter(
            fil => fil.group === (guest.group?._id || ''),
          ),
        }))
        .filter(item => item.guests.length > 0)
    }

    return guests
  }

  return (
    <>
      <Header.Nested
        title={t('home.links.guests')}
        rightIcon="Plus"
        onRightIconPress={onAddButtonPress}
      />
      <Background.Scroll style={styles.background}>
        <PaddingContainer>
          <Input.Standard
            placeholder={t('guests.search')}
            minimal
            value={name}
            onChange={setName}
          />
        </PaddingContainer>

        <FlatList
          contentContainerStyle={styles.ceremonies_list_content}
          bounces={false}
          ItemSeparatorComponent={() => <Separator />}
          style={styles.ceremonies_list}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={ceremonyData}
          renderItem={renderItem}
        />

        <List {...{ guests: filteredData() }} />
      </Background.Scroll>
    </>
  )
}
