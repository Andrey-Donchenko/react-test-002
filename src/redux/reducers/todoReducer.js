import { SET_ALL_TASKS, SET_USER_TASKLIST, SET_USER_LIST } from '../../constants/actionTypes';

const initialState = {
  allTasks: [],
  userTasks: [],
  userList: {}
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
			case SET_ALL_TASKS:
        return {
          ...state,
          allTasks: action.payload
        };
      case SET_USER_TASKLIST:
        return {
          ...state,
          userTasks: action.payload
        };
      case SET_USER_LIST:
        return {
          ...state,
          userList: action.payload
        };
	    default:
	      return state;
	  }
};

export default todoReducer;
