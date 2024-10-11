import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Reducers } from '@/app/store/tools'

import { EStoreReducer } from '@/app/store/types'

import { TVendor } from '@/entities/vendor/models/common'

import { TFavoriteCategory } from '../models'

import { TInitialState } from './types'

const initialState: TInitialState = {
  loading: false,
  favorites: [],
  favoriteTotalCount: 0,
  savedCategory: [],
}

export const slice = createSlice({
  name: EStoreReducer.user,
  initialState,
  reducers: {
    setState: Reducers.setState<TInitialState>(),
    clearState: Reducers.clearState<TInitialState>(initialState),
    setFavorite: (state, { payload }: PayloadAction<TVendor[]>) => {
      state.favorites = payload
    },
    setFavoriteTotalCount: (state, { payload }: PayloadAction<number>) => {
      state.favoriteTotalCount = payload
    },

    setSavedCategory: (
      state,
      { payload }: PayloadAction<TFavoriteCategory[]>,
    ) => {
      state.savedCategory = payload
    },

    setUserError: () => {},
  },
})

export const sliceActions = slice.actions

export default slice.reducer
