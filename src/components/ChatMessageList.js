import React from "react";
import ChatMessage from "./ChatMessage";

export default function ChatMessageList({ userName, messages = [] }) {
  if (messages.length === 0) {
    return "no messages yet";
  }
  return messages.map((message, i) => (
    <ChatMessage isOwn={userName === message.sender} key={i} {...message} />
  ));
}
