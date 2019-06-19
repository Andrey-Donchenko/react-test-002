import { takeEvery, take, fork, all } from 'redux-saga/effects';

import { getTaskList, getUserTaskList, getUser } from './workers';
import * as types from '../../constants/actionTypes';

function* watchAllTasks() {
  yield takeEvery(types.GET_ALL_TASKS, getTaskList)
}

function* watchUserTasks() {
  while (true) {
    const action = yield take(types.GET_USER_TASKLIST);
    yield fork(getUserTaskList, action.payload);
  }
}

function* watchUserData() {
  const action = yield take(types.GET_USER_DATA);
  yield fork(getUser, action.payload);
}

export default function* rootSaga() {
  yield all([
    watchAllTasks(),
    watchUserTasks(),
    watchUserData()
  ])
}
