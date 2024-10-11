import React from 'react'

import { useTranslation } from 'react-i18next'

import { ETaskStatus } from '@/entities/tasks/models'

import { EColors } from '@/shared/ui/styled'
import { FlexWrapper } from '@/shared/ui/styled/Styled'
import { BodyM1SB, BodyM3SB } from '@/shared/ui/styled/Text'

import { StyledTouchable } from './styles'
import { TFilterProps } from './types'

export const Filter = ({ filter, setFilter }: TFilterProps) => {
  const { t } = useTranslation()
  return (
    <FlexWrapper justify="space-between">
      <BodyM1SB>{t('tasks.filter')}</BodyM1SB>
      <FlexWrapper width="auto">
        <StyledTouchable
          active={filter === undefined}
          onPress={() => setFilter(undefined)}>
          <BodyM3SB
            color={filter === undefined ? EColors.white : EColors.black}>
            {t('tasks.all').toUpperCase()}
          </BodyM3SB>
        </StyledTouchable>
        <StyledTouchable
          onPress={() => setFilter(ETaskStatus.not_done)}
          active={filter === ETaskStatus.not_done}>
          <BodyM3SB
            color={
              filter === ETaskStatus.not_done ? EColors.white : EColors.black
            }>
            {t('tasks.to_do').toUpperCase()}
          </BodyM3SB>
        </StyledTouchable>
        <StyledTouchable
          active={filter === ETaskStatus.done}
          onPress={() => setFilter(ETaskStatus.done)}>
          <BodyM3SB
            color={filter === ETaskStatus.done ? EColors.white : EColors.black}>
            {t('tasks.done').toUpperCase()}
          </BodyM3SB>
        </StyledTouchable>
      </FlexWrapper>
    </FlexWrapper>
  )
}
