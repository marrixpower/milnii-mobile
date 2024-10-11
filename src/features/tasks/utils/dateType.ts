import { subMonths, subWeeks } from 'date-fns'

import { ETaskTimeLine } from '@/entities/tasks/models'

export const dateWeddingTypeToDate = {
  [ETaskTimeLine.months_18_12]: (date: Date) => subMonths(date, 18),
  [ETaskTimeLine.months_12_10]: (date: Date) => subMonths(date, 12),
  [ETaskTimeLine.months_10_8]: (date: Date) => subMonths(date, 10),
  [ETaskTimeLine.months_8_6]: (date: Date) => subMonths(date, 8),
  [ETaskTimeLine.months_6_4]: (date: Date) => subMonths(date, 6),
  [ETaskTimeLine.months_4_2]: (date: Date) => subMonths(date, 4),
  [ETaskTimeLine.months_2]: (date: Date) => subMonths(date, 2),
  [ETaskTimeLine.month_1]: (date: Date) => subMonths(date, 1),
  [ETaskTimeLine.weeks_2]: (date: Date) => subWeeks(date, 2),
  [ETaskTimeLine.week]: (date: Date) => subWeeks(date, 1),
}
