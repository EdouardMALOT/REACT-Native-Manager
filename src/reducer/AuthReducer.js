import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types.js';

const INITIALE_STATE = { email: 'ed@test.com', password: '' };

export default (state = INITIALE_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
        return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
    default:
      return state;
  }
};
