import { all } from 'redux-saga/effects'

import { favoriteWatcher } from '@/entities/favorite/store'
import { taskWatcher } from '@/entities/tasks/store'
import { userWatcher } from '@/entities/user/store'

//Configure your saga

function* rootSaga() {
  yield all([userWatcher(), taskWatcher(), favoriteWatcher()])
}

export default rootSaga
