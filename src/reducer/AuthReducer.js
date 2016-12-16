import { EMAIL_CHANGED, PASSWORD_CHANGED,
         LOGIN_USER_SUCCESS, LOGIN_USER_FAIL
        } from '../actions/types.js';

const INITIALE_STATE = { email: 'ed@test.com', password: '', user: null, error: '' };

export default (state = INITIALE_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
        return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS :
         return { ...state, user: action.payload, error: 'You are connected' };
    case LOGIN_USER_FAIL :
          return { ...state, error: 'Anthentification failed !', password: '' };
    default:
      return state;
  }
};
