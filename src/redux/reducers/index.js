import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  user: userReducer,
  todos: todoReducer
});

export default reducer;
