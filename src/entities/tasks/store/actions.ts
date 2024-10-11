import { createAction } from '@reduxjs/toolkit'

import { ActionsTypes } from './actionTypes'
import { sliceActions } from './reducer'

export const tasksActions = {
  ...sliceActions,
  getDoneStatusRequest: createAction(ActionsTypes.getDoneCount),
  getTotalCountRequest: createAction(ActionsTypes.getTotalCount),
}
