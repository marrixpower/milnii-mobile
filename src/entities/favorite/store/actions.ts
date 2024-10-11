import { createAction } from '@reduxjs/toolkit'

import { ActionsTypes } from './actionTypes'
import { sliceActions } from './reducer'

export const favoriteActions = {
  ...sliceActions,
  getFavoritesTotalCountRequest: createAction(
    ActionsTypes.getFavoritesTotalCount,
  ),
}
