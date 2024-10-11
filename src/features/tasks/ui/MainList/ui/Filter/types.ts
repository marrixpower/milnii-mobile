import { ETaskStatus } from '@/entities/tasks/models'

export type TFilterProps = {
  filter: undefined | ETaskStatus
  setFilter: (filter: ETaskStatus | undefined) => void
}
