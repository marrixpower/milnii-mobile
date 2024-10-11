import { TTasksStackCreateTaskParams } from '@/screens/Tasks/CreateTask'

import { TTaskStackSingleTaskParams } from '@/screens/Tasks/Task/types'

import { EScreens } from '../../screens'

export type TTasksStack = {
  [EScreens.TasksMain]: undefined
  [EScreens.TasksCreateTask]: TTasksStackCreateTaskParams
  [EScreens.TasksTask]: TTaskStackSingleTaskParams
}
