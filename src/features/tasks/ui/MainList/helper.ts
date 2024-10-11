import { format } from 'date-fns'

import { i18n } from '@/app/i18n'

import { ETaskTimeLine } from '@/entities/tasks/models'

import { dateLocale } from '@/shared/lib/tools/dateLocale'

import { dateWeddingTypeToDate } from '../../utils'

export const getMonthText = (
  dateType: ETaskTimeLine,
  weddingDate: string | undefined,
) => {
  const wedding = weddingDate ? new Date(weddingDate) : new Date()

  const func = dateWeddingTypeToDate[dateType || ETaskTimeLine.month_1]

  const date = func(wedding)

  return format(date, 'MMMM yyyy', {
    locale: dateLocale[i18n.language],
  }).toUpperCase()
}
