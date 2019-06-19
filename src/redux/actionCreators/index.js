import * as types from '../../constants/actionTypes';

export const getAllTasks = () => (
  { type: types.GET_ALL_TASKS }
)

export const setAllTasks = data => (
  { type: types.SET_ALL_TASKS, payload: data }
)

export const getUserTasks = userId => (
  { type: types.GET_USER_TASKLIST, payload: userId }
)

export const setUserTasks = data => (
  { type: types.SET_USER_TASKLIST, payload: data }
)

export const getUserData = id => (
  { type: types.GET_USER_DATA, payload: id }
)

export const setUserData = data => (
  { type: types.SET_USER_DATA, payload: data }
)

export const setUserList = data => (
  { type: types.SET_USER_LIST, payload: data }
)
