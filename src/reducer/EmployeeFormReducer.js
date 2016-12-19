import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS } from '../actions/types.js';

const INITIALE_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIALE_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
        return INITIALE_STATE;
    case EMPLOYEE_SAVE_SUCCESS :
        return INITIALE_STATE;
    default:
      return state;
  }
};
