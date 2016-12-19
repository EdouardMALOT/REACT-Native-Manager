import { EMPLOYEE_FETCH_SUCCESS } from '../actions/types';

const INITIALE_STATE = {};

export default (state = INITIALE_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH_SUCCESS:
        return action.payload;
    default:
      return state;
  }
};
