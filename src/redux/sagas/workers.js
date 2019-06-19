import { call, put, all } from 'redux-saga/effects';

import { getAllTasks, getUserTasks, getUserData } from '../../API';
import { setAllTasks, setUserTasks, setUserData, setUserList } from '../actionCreators';

export function* getTaskList() {
  const { data } = yield call(getAllTasks)
  yield put(setAllTasks(data));
  const set = new Set(data.map(el => el.userId));
  const arr = [...set];
  const allUsers = yield all(arr.map(el =>
    call(() => getUserData(el))
  ))
  const obj = {};
  allUsers.forEach(el => {
    obj[el.data[0].id] = el.data[0].name;
  })
  yield put(setUserList(obj));
}

export function* getUserTaskList(payload) {
  const { data } = yield call(() => getUserTasks(payload))
  yield put(setUserTasks(data))
}

export function* getUser(payload) {
  const { data } = yield call(() => getUserData(payload));
  yield put(setUserData(data[0]))
}
