import { EMAIL_CHANGED } from '../actions/types.js';

const INITIALE_STATE = { email: '' };

export default (state = INITIALE_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
        return { ...state, email: action.payload };

    default:
      return state;
  }
};
