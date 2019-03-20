const initialState = {
  value: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNTER_INC":
      return {
        ...state,
        value: state.value + action.payload
      };
    case "COUNTER_RESET":
      return {
        ...state,
        value: 0
      };
    default:
      return state;
  }
};

export default reducer;
