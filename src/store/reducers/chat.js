import {
  RECEIVED_MESSAGE,
  START_CONNECT,
  CONNECTED,
  DISCONNECT
} from "../actions/chat";

const initialState = {
  status: "DISCONNECTED", // or CONNECTING, CONNECTED
  connection: null // contains chat data if connected
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_CONNECT:
      return {
        ...state,
        status: "CONNECTING"
      };
    case CONNECTED:
      return {
        ...state,
        status: "CONNECTED",
        connection: {
          userName: action.payload,
          messages: []
        }
      };
    case DISCONNECT:
      return {
        ...state,
        status: "DISCONNECTED",
        connection: null
      };
    case RECEIVED_MESSAGE:
      if (state.status === "CONNECTED") {
        return {
          ...state,
          connection: {
            ...state.connection,
            messages: state.connection.messages.concat(action.payload)
          }
        };
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
