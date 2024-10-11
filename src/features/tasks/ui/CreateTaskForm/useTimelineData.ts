import { useTranslation } from 'react-i18next'

import { useTypedSelector } from '@/app/store'

import { ETaskTimeLine } from '@/entities/tasks/models'

import { getUserSelector } from '@/entities/user/store'

import { dateWeddingTypeToDate } from '../../utils'

import { TTimelineDataItem } from './types'

export const useTimelineData = () => {
  const { t } = useTranslation()
  const { user } = useTypedSelector(getUserSelector)

  const values = Object.values(ETaskTimeLine)

  const data: TTimelineDataItem[] = values.map(item => ({
    label: t(`tasks.timeline.${item}`),
    value: item,
  }))

  const onGetDate = (value: ETaskTimeLine) => {
    if (!user?.weddingDate) return

    const wedding = new Date(user.weddingDate)

    return dateWeddingTypeToDate[value](wedding)
  }

  return { data, onGetDate }
}
