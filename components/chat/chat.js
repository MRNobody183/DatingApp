import { useRoute } from "@react-navigation/native";
import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

export function Chat() {
  const route = useRoute();
  const user = route.params.user;
  const [messages, setMessages] = useState([]);
  console.log("im user");
  useEffect(() => {
    setMessages([
      {
        _id: user?.id,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: user?.name,
          avatar: user?.img,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 0,
      }}
    />
  );
}
