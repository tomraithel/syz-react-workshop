import React from "react";
import { connect } from "react-redux";

import Headline from "../components/Headline";
import Box from "../components/Box";
import * as actions from "../store/actions/chat";
import TextButton from "../components/TextButton";
import ChatMessageList from "../components/ChatMessageList";
import Prompt from "../components/Prompt";

function Chat({ status, connection, connect, disconnect, send }) {
  return (
    <Box>
      <Headline>Status: {status}</Headline>
      {status === "CONNECTED" ? (
        <>
          <ChatMessageList
            userName={connection.userName}
            messages={connection.messages}
          />
          <Prompt
            onSubmit={send}
            buttonText="Abschicken"
            placeholder="Nachricht eingeben"
          />
          <TextButton onClick={() => disconnect()}>disconnect</TextButton>
        </>
      ) : (
        <Prompt
          buttonText="Chat beitreten"
          placeholder="Usernamen eingeben"
          onSubmit={name => {
            connect(name.trim());
          }}
        />
      )}
    </Box>
  );
}

const mapStateToProps = state => {
  return {
    status: state.chat.status,
    connection: state.chat.connection
  };
};

const mapDispatchToProps = dispatch => {
  return {
    connect: name => dispatch(actions.startConnect(name)),
    disconnect: () => dispatch(actions.disconnect()),
    send: message => dispatch(actions.sendMessage(message))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
