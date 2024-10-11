import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeLatest } from 'redux-saga/effects'

import { TSagaResponse } from '@/app/store'

import { FavoriteService } from '@/entities/favorite/services'
import { TGetFavorites } from '@/entities/favorite/services/types'

import { userActions } from './actions'
import { ActionsTypes } from './actionTypes'

function* getFavoritesWorker({}: PayloadAction<TGetFavorites['payload']>) {
  // try {
  //   const response: TSagaResponse<TGetFavorites['response']> = yield call(
  //     FavoriteService.getFavorites,
  //     { limit: 100 },
  //   )
  //   yield put(userActions.setState({ favrites: response.data.docs }))
  // } catch (e) {
  //   console.log('getFavoritesWorker err', e)
  // }
}

export function* userWatcher() {
  // yield takeLatest(ActionsTypes.getFavorites, getFavoritesWorker)
}
