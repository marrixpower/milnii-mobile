import React from 'react'
import { View } from 'react-native'

import { useTranslation } from 'react-i18next'

import { FlexWrapper } from '../styled/Styled'
import { BodyM4R, BodyM4SB } from '../styled/Text'

import { FilledLine, TotalLine } from './styles'
import { TProgressProps } from './types'

export const Progress = ({
  filled,
  total,
  title,
  onViewAllPress,
}: TProgressProps) => {
  const { t } = useTranslation()
  return (
    <View>
      <FlexWrapper justify="space-between">
        <BodyM4SB>{t('progress', { filled, total, title })}</BodyM4SB>
        {onViewAllPress && (
          <BodyM4R onPress={onViewAllPress}>
            {t('home.vendors.view_all')}
          </BodyM4R>
        )}
      </FlexWrapper>
      <TotalLine />
      <FilledLine total={total} filled={filled} />
    </View>
  )
}
