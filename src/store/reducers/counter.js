import { INC, RESET } from "../actions/counter";

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
    default:
      return state;
  }
};

export default reducer;
