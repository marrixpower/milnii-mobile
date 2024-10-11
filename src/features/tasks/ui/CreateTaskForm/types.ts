import { ETaskTimeLine } from '@/entities/tasks/models'

export type TCreateTaskForm = {
  name: string
  description: string
  dateType: ETaskTimeLine
}

export type TTimelineDataItem = {
  value: ETaskTimeLine
  label: string
}
