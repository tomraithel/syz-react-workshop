import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { API_BASE_URL } from "./api";

export default function(username) {
  return new Promise((resolve, reject) => {
    let stompClient = null;

    const send = (channel, message) => {
      stompClient.send("/app/" + channel, {}, JSON.stringify(message));
    };

    const onMessage = callback => {
      // Subscribe to the Public Topic
      stompClient.subscribe("/topic/public", payload => {
        callback(JSON.parse(payload.body));
      });
    };

    const onConnected = () => {
      // Tell your username to the server
      send("chat.addUser", { sender: username, type: "JOIN" });

      resolve({
        sendMessage,
        onMessage
      });
    };

    const onError = error => {
      reject(error);
    };

    const sendMessage = messageContent => {
      if (messageContent && stompClient) {
        const chatMessage = {
          sender: username,
          content: messageContent,
          type: "CHAT"
        };

        send("chat.sendMessage", chatMessage);
      }
    };

    // TODO - use real url
    const socket = new SockJS(API_BASE_URL + "/ws");

    stompClient = Stomp.over(socket);
    stompClient.debug = null;
    stompClient.connect({}, onConnected, onError);
  });
}
