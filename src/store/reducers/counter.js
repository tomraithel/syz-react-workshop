import { INC, RESET, SET } from "../actions/counter";

const initialState = {
  value: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        value: state.value + action.payload
      };
    case RESET:
      return {
        ...state,
        value: 0
      };
    case SET:
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
