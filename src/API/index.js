import axios from 'axios';
import { BASE_URL } from '../constants/baseUrl';

export const getAllTasks = () =>
  axios.get(`${BASE_URL}/todos`)

export const getUserTasks = userId =>
  axios.get(`${BASE_URL}/todos`,
    { params: { userId } }
  )

export const getUserData = id =>
  axios.get(`${BASE_URL}/users`,
    { params: { id } }
  )
