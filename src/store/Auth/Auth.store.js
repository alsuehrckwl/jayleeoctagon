// import { createAction, handleActions } from 'redux-actions';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const initialState = {
  isLogin: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
}

export const login = data => ({
  type: LOGIN,
  payload: {
    data,
  },
});

export const logout = () => ({
  type: LOGOUT,
});
