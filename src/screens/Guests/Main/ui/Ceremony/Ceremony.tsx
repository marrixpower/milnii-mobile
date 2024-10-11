import React from 'react'

import { useTranslation } from 'react-i18next'

import { EGuestStatus } from '@/entities/guests'

import { Icon } from '@/shared/ui/Icon'
import { EColors } from '@/shared/ui/styled'
import { BodyM4SB, CaptionL1R } from '@/shared/ui/styled/Text'

import { TouchableContainer } from './styles'
import { TCeremonyProps } from './types'

export const Ceremony = ({
  value = EGuestStatus.confirmed,
  selectedValue,
  total = 555,
  filled = 55,
  onPress = () => {},
}: TCeremonyProps) => {
  const { t } = useTranslation()
  const isSelected = value === selectedValue

  const textColor = isSelected ? EColors.beige_200 : EColors.primary
  const color = isSelected ? EColors.primary : EColors.white

  const _onPress = () => {
    if (isSelected) {
      onPress(undefined)
      return
    }

    onPress(value)
  }

  return (
    <TouchableContainer
      color={color}
      isSelected={isSelected}
      onPress={_onPress}>
      <Icon name="Vendors" size={30} stroke={textColor} />
      <BodyM4SB color={textColor} mTop="5px">
        {t(`guests.statuses.${value}`).toUpperCase()}
      </BodyM4SB>
      <CaptionL1R color={textColor}>
        {t('guests.attending', { total, filled })}
      </CaptionL1R>
    </TouchableContainer>
  )
}
