import { TTask } from '../../models'

export type TInitialState = {
  loading: boolean
  totalCount: number
  doneCount: number
  tasks: TTask[]
}
