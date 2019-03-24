import chat from "../../lib/chatConnection";

// Constants
export const START_CONNECT = "CHAT_START_CONNECT";
export const CONNECTED = "CHAT_CONNECTED";
export const DISCONNECT = "CHAT_DISCONNECT";
export const RECEIVED_MESSAGE = "CHAT_RECEIVED_MESSAGE";
export const SEND_MESSAGE = "CHAT_SEND_MESSAGE";

// Actions
export const startConnect = username => dispatch => {
  dispatch({ type: START_CONNECT });

  // start chat connection
  chat
    .join(username)
    .then(() => {
      chat.subscribe(message => {
        dispatch(receivedMessage(message));
      });

      dispatch(connected(username));
    })
    .catch(() => {
      dispatch(disconnect());
    });
};
export const connected = userName => ({ type: CONNECTED, payload: userName });

export const disconnect = () => {
  chat.leave();
  return { type: DISCONNECT };
};

export const receivedMessage = message => ({
  type: RECEIVED_MESSAGE,
  payload: message
});

export const sendMessage = message => {
  chat.sendMessage(message);
  return {
    type: SEND_MESSAGE,
    payload: message
  };
};
