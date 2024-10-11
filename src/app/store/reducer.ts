import { combineReducers } from '@reduxjs/toolkit'

import { favoriteReducer } from '@/entities/favorite/store'
import { taskReducer } from '@/entities/tasks/store'
import { userReducer } from '@/entities/user/store'

import { EStoreReducer } from './types'

//Configure your reducers
export default combineReducers({
  [EStoreReducer.user]: userReducer,
  [EStoreReducer.task]: taskReducer,
  [EStoreReducer.favorite]: favoriteReducer,
})
