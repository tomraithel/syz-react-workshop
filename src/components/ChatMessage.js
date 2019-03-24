import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: ${props => (props.isOwn ? "row-reverse" : "row")};
`;

const Img = styled.img`
  display: block;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const Sender = styled.h5`
  display: block;
  font-size: 1em;
  margin: 0 0 5px 0;
  padding: 0;
`;

const Main = styled.div`
  display: block;
  margin-${props => (props.isOwn ? "right" : "left")}: 20px;
  padding: 10px;
  background: ${props =>
    props.isOwn ? props.theme.color.green : props.theme.color.gray2};
`;

const EventMessage = styled.div`
  font-style: italic;
  opacity: 0.4;
`;

const NormalMessage = styled.div``;

export default function ChatMessage({ type, content, sender, isOwn }) {
  const senderEscaped = encodeURIComponent(sender);
  return (
    <Wrapper isOwn={isOwn}>
      <Img
        src={`https://api.adorable.io/avatars/50/${senderEscaped}@syzygy.de.png`}
      />
      <Main isOwn={isOwn}>
        <Sender>{sender}</Sender>
        {type === "JOIN" ? <EventMessage>Joined Chat</EventMessage> : null}
        {type === "LEAVE" ? <EventMessage>Left Chat</EventMessage> : null}
        {type === "CHAT" ? <NormalMessage>{content}</NormalMessage> : null}
      </Main>
    </Wrapper>
  );
}
