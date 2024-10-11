import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Reducers } from '@/app/store/tools'

import { EStoreReducer } from '@/app/store/types'

import { TInitialState } from './types'

const initialState: TInitialState = {
  loading: false,
  totalCount: 0,
  doneCount: 0,
  tasks: [],
}

export const slice = createSlice({
  name: EStoreReducer.task,
  initialState,
  reducers: {
    setState: Reducers.setState<TInitialState>(),
    clearState: Reducers.clearState<TInitialState>(initialState),

    setUserError: () => {},
    setTotalCount: (state, { payload }: PayloadAction<number>) => {
      state.totalCount = payload
    },
    setDoneCount: (state, { payload }: PayloadAction<number>) => {
      state.doneCount = payload
    },
  },
})

export const sliceActions = slice.actions

export default slice.reducer
