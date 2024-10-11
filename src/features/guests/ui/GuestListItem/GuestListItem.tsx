import React, { useEffect, useState } from 'react'

import { EGuestStatus } from '@/entities/guests'
import { GuestsService } from '@/entities/guests/services'

import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { EColors } from '@/shared/ui/styled'
import { Touchable } from '@/shared/ui/styled/Styled'

import { FlexWrapper } from '@/shared/ui/styled/Styled'

import { BodyM1SB, BodyM2R } from '@/shared/ui/styled/Text'

import { GuestItem, styles } from './styled'
import { TGuestListItemProps } from './types'

export const GuestListItem = ({
  _id,
  persons,
  status,
  onAddButtonPress = () => {},
  withoutPadding = false,
}: TGuestListItemProps) => {
  const [localStatus, setLocalStatus] = useState(status)
  const isConfirmed = localStatus === EGuestStatus.confirmed
  const isDeclined = localStatus === EGuestStatus.declined

  useEffect(() => {
    if (status) setLocalStatus(status)
  }, [status])

  const onChangeStatus = async () => {
    if (!_id) return
    const newStatus =
      (isDeclined && EGuestStatus.pending) || isConfirmed
        ? EGuestStatus.pending
        : EGuestStatus.confirmed

    await GuestsService.patchGuest({
      id: _id,
      status: newStatus,
    }).then(() => setLocalStatus(newStatus))
  }

  return (
    <Touchable style={styles.touch} onPress={onAddButtonPress}>
      <GuestItem {...{ withoutPadding }}>
        <FlexWrapper width={'auto'} justify="flex-start">
          <Checkbox
            size={23}
            type="circle"
            icon={isDeclined ? 'Close' : 'Done'}
            onPress={onChangeStatus}
            active={isDeclined || isConfirmed}
          />
          <BodyM1SB mLeft="12px" numberOfLines={2} style={styles.text}>
            {persons.map(per => per.name).join(', ')}
          </BodyM1SB>
        </FlexWrapper>

        {persons.length > 1 && (
          <BodyM2R color={EColors.dark_grey_200}>x{persons.length}</BodyM2R>
        )}
      </GuestItem>
    </Touchable>
  )
}
