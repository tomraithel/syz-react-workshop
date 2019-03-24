import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { API_BASE_URL } from "./api";

let stompClient = null;

const send = (channel, message) => {
  if (stompClient) {
    const { username } = stompClient.__data;
    stompClient.send(
      "/app/" + channel,
      {},
      JSON.stringify({ ...message, sender: username })
    );
  }
};

export default {
  leave() {
    if (stompClient) {
      stompClient.disconnect();
      stompClient = null;
    }
  },

  subscribe(callback) {
    if (stompClient) {
      // Subscribe to the Public Topic
      stompClient.subscribe("/topic/public", payload => {
        callback(JSON.parse(payload.body));
      });
    }
  },

  sendMessage(messageContent) {
    if (messageContent) {
      const chatMessage = {
        content: messageContent,
        type: "CHAT"
      };

      send("chat.sendMessage", chatMessage);
    }
  },

  join(username) {
    this.leave();

    return new Promise((resolve, reject) => {
      const onConnected = () => {
        // Send, that we joined
        setTimeout(() => {
          send("chat.addUser", { type: "JOIN" });
        });

        resolve();
      };

      const onError = error => {
        reject(error);
      };
      const socket = new SockJS(API_BASE_URL + "/ws");

      stompClient = Stomp.over(socket);
      stompClient.debug = null;
      stompClient.connect({}, onConnected, onError);
      stompClient.__data = {
        username
      };
    });
  }
};
