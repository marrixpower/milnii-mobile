import React from 'react'

import { Linking } from 'react-native'

import { useTranslation } from 'react-i18next'

import { Icon } from '@/shared/ui/Icon'
import { EColors } from '@/shared/ui/styled'
import { FlexWrapper } from '@/shared/ui/styled/Styled'
import { H2, BodyM4SB, CaptionL1R, BodyL3SB } from '@/shared/ui/styled/Text'

import * as S from './styles'

import { TVendorInfoProps } from './types'

export const Info = ({
  name = '',
  address = '',
  phone = '',
  price = 0,
  site,
  description,
  _id,
}: TVendorInfoProps) => {
  const { t } = useTranslation()

  const onOpenLink = () => {
    if (!site) return
    Linking.openURL(site)
  }

  return (
    <S.Container>
      <FlexWrapper mTop="10px" justify="space-between">
        <H2>{name}</H2>
      </FlexWrapper>

      <FlexWrapper justify="flex-start" mTop="4px">
        <Icon name="Location" size={12} />
        <BodyM4SB mLeft="4px" color={EColors.grey_1000}>
          {address}
        </BodyM4SB>
      </FlexWrapper>

      <BodyM4SB color={EColors.primary} mTop="4px" mBottom="20px">
        {phone}
      </BodyM4SB>

      <S.DetailCard hideBottomBorder>
        <Icon name="Church" size={22} />
        <CaptionL1R color={EColors.grey_1000} mLeft="10px">
          {t('home.vendors.price_range')} ${price}
        </CaptionL1R>
      </S.DetailCard>

      <S.DetailCard>
        <Icon name="Church" size={22} />
        <CaptionL1R color={EColors.grey_1000} mLeft="10px">
          Visit{' '}
          <CaptionL1R onPress={onOpenLink} color={EColors.primary}>
            {site}
          </CaptionL1R>{' '}
          for more details
        </CaptionL1R>
      </S.DetailCard>

      <BodyL3SB mTop="30px">{description}</BodyL3SB>
    </S.Container>
  )
}
