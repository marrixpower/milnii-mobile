import { TUser } from '@/entities/user/models/common'

export enum ETaskStatus {
  done = 'done',
  not_done = 'not-done',
}

export enum ETaskTimeLine {
  months_18_12 = 'months-18-12',
  months_12_10 = 'months-12-10',
  months_10_8 = 'months-10-8',
  months_8_6 = 'months-8-6',
  months_6_4 = 'months-6-4',
  months_4_2 = 'months-4-2',
  months_2 = 'months-2',
  month_1 = 'month-1',
  weeks_2 = 'weeks-2',
  week = 'week',
}

export type TTask = {
  _id: string
  user: TUser
  increment: number
  name: string
  description: string
  budgetName: string
  budget: number
  activeAfter: string
  status: ETaskStatus
  dateType: ETaskTimeLine
}
