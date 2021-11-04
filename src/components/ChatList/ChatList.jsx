import React from "react";

import { ChatListContainer } from "./ChatList.styles";
import ChatItem from "../ChatItem/ChatItem";

const ChatList = () => {
  const ChatItems = [
    {
      name: "Lalo Salamanca",
      lastMessage: "Helloooo",
      img: null,
      status: "online",
      time: "02:40",
      unread: 0,
      active: true,
    },
    {
      name: "Jorge De Guzmàn",
      lastMessage: "okay sure",
      img: null,
      status: "away",
      time: "12:40",
      unread: 3,
      active: false,
    },
    {
      name: "Lalo Salamanca",
      lastMessage: "Helloooo",
      img: null,
      status: "online",
      time: "02:40",
      unread: 0,
      active: false,
    },
    {
      name: "Lalo Salamanca",
      lastMessage: "Helloooo",
      img: null,
      status: "online",
      time: "02:40",
      unread: 0,
      active: false,
    },
  ];
  return (
    <ChatListContainer>
      {ChatItems.map((item, index) => {
        return <ChatItem key={index} {...item} />;
      })}
    </ChatListContainer>
  );
};

export default ChatList;
