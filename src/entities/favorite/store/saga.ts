import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeLatest } from 'redux-saga/effects'

import { TSagaResponse } from '@/app/store'

import { FavoriteService } from '@/entities/favorite/services'
import { TGetFavorites } from '@/entities/favorite/services/types'

import { EFavoriteType } from '../models'

import { favoriteActions } from './actions'
import { ActionsTypes } from './actionTypes'

function* getFavoritesTotalCountWorker({}: PayloadAction<void>) {
  try {
    const response: TSagaResponse<TGetFavorites['response']> = yield call(
      FavoriteService.getFavorites,
      { type: EFavoriteType.favorite },
    )
    yield put(favoriteActions.setFavoriteTotalCount(response.data.totalCount))
  } catch (e) {
    console.log('getFavoritesTotalCountWorker err', e)
  }
}

export function* favoriteWatcher() {
  yield takeLatest(
    ActionsTypes.getFavoritesTotalCount,
    getFavoritesTotalCountWorker,
  )
}
