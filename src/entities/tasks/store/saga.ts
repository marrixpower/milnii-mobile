import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeLatest } from 'redux-saga/effects'

import { TSagaResponse } from '@/app/store'

import { ETaskStatus } from '../models'
import { TasksService } from '../services'
import { TGetTaskRequest } from '../services/types'

import { tasksActions } from './actions'
import { ActionsTypes } from './actionTypes'

function* getDoneCountWorker({}: PayloadAction<void>) {
  try {
    const response: TSagaResponse<TGetTaskRequest['response']> = yield call(
      TasksService.getTasks,
      {
        limit: 1,
        status: [ETaskStatus.done],
      },
    )
    yield put(tasksActions.setDoneCount(response.data.totalCount))
  } catch (e) {
    console.log('getDoneCountWorker err', e)
  }
}

function* getTotalCountWorker({}: PayloadAction<void>) {
  try {
    const response: TSagaResponse<TGetTaskRequest['response']> = yield call(
      TasksService.getTasks,
      {
        limit: 1,
      },
    )
    yield put(tasksActions.setTotalCount(response.data.totalCount))
  } catch (e) {
    console.log('getTotalCountWorker err', e)
  }
}
export function* taskWatcher() {
  yield takeLatest(ActionsTypes.getDoneCount, getDoneCountWorker)
  yield takeLatest(ActionsTypes.getTotalCount, getTotalCountWorker)
}
