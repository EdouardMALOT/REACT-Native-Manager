import { EMPLOYEE_UPDATE } from '../actions/types.js';

const INITIALE_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIALE_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
