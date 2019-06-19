import { SET_USER_DATA } from '../../constants/actionTypes';

const initialState = {
  data: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
