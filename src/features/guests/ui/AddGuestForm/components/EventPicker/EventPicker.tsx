import React from 'react'

import { FlatList, ListRenderItem } from 'react-native'

import { useTranslation } from 'react-i18next'

import { useGetGuestEvents } from '@/features/guests/hooks'

import { EGuestEventGroup, TGuestEvent } from '@/entities/guests'

import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { EColors } from '@/shared/ui/styled'
import { FlexWrapper, Touchable } from '@/shared/ui/styled/Styled'
import { BodyM3SB, BodyM1SB, BodyM5B } from '@/shared/ui/styled/Text'

import { CreateEventButton } from '../CreateEventButton'

import { styles } from './styled'

import { TEventPickerProps } from './types'

const groups = [EGuestEventGroup.pre_wedding, EGuestEventGroup.wedding]

export const EventPicker = ({
  value = [],
  onChange = () => {},
  error,
}: TEventPickerProps) => {
  const { t } = useTranslation()
  const { guestEvent, getAction } = useGetGuestEvents()

  const _onChange = (active: boolean, id: string) => {
    if (active) {
      onChange(value.filter(item => item !== id))

      return
    }

    onChange([...value, id])
  }

  const renderItem: ListRenderItem<TGuestEvent> = ({ item }) => {
    const isActive = value.includes(item._id)
    return (
      <Touchable onPress={() => _onChange(isActive, item._id)}>
        <FlexWrapper height="43px" justify="flex-start" width="auto">
          <Checkbox
            size={23}
            type="circle"
            active={isActive}
            onPress={() => _onChange(isActive, item._id)}
          />
          <BodyM1SB style={styles.invite_text} numberOfLines={1} mLeft="12px">
            {item.name}
          </BodyM1SB>
        </FlexWrapper>
      </Touchable>
    )
  }

  const filterEventsForGroup = (filter: EGuestEventGroup) =>
    guestEvent.filter(item => item.group === filter)

  const renderLists = (group: EGuestEventGroup) => {
    return (
      <React.Fragment key={group}>
        <BodyM3SB mTop="20px">{t(`event_group.${group}`)}</BodyM3SB>
        <FlatList
          bounces={false}
          style={styles.list}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          data={filterEventsForGroup(group)}
          renderItem={renderItem}
        />

        <CreateEventButton group={group} onRefresh={getAction} />
      </React.Fragment>
    )
  }
  return (
    <>
      {groups.map(renderLists)}

      {!!error && (
        <BodyM5B color={EColors.primary} mTop={'5px'} mLeft={'8px'}>
          {error}
        </BodyM5B>
      )}
    </>
  )
}
