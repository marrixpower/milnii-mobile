import { useState } from 'react'

import React from 'react-native'

import { useTranslation } from 'react-i18next'

import { Icon } from '@/shared/ui/Icon'
import { EColors, Styled, Typography } from '@/shared/ui/styled'

import { CreateEvent } from '../../../CreateEvent'

import { TCreateEventButton } from './types'

export const CreateEventButton = (props: TCreateEventButton) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const onOpenModal = () => {
    setOpen(true)
  }

  return (
    <>
      <Styled.Touchable onPress={onOpenModal}>
        <Styled.FlexWrapper mTop={'10px'} mBottom={'10px'}>
          <Typography.BodyM1R mRight={'10px'} color={EColors.primary}>
            {t('button.create')}
          </Typography.BodyM1R>
          <Icon size={14} name={'Plus'} stroke={EColors.primary} />
        </Styled.FlexWrapper>
      </Styled.Touchable>

      <CreateEvent {...{ open, setOpen }} {...props} />
    </>
  )
}
