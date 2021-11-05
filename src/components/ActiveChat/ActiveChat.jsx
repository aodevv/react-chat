import React from "react";

import { RightCenter, MessagesUl } from "./ActiveChat.styles";
import Message from "../Message/Message";

const ActiveChat = () => {
  const Messages = [
    {
      sender: "Lalo Salamnca",
      content: "hi",
      isRight: false,
      time: "00:42",
      img: null,
    },
    {
      sender: "Lalo Salamnca",
      content: "hi",
      isRight: true,
      time: "00:42",
      img: null,
    },
    {
      sender: "Lalo Salamnca",
      content: "how's going on your project?",
      isRight: false,
      time: "00:42",
      img: null,
    },
    {
      sender: "Lalo Salamnca",
      content: "Do you need any help?",
      isRight: false,
      time: "00:42",
      img: null,
    },
    {
      sender: "Lalo Salamnca",
      content: "Hello",
      isRight: true,
      time: "00:42",
      img: null,
    },
    {
      sender: "Lalo Salamnca",
      content: "how's going on your project?",
      isRight: false,
      time: "00:42",
      img: null,
    },
    {
      sender: "Lalo Salamnca",
      content: "Do you need any help?",
      isRight: false,
      time: "00:42",
      img: null,
    },
    {
      sender: "Lalo Salamnca",
      content: "Hey there!",
      isRight: true,
      time: "00:42",
      img: null,
    },
  ];

  return (
    <RightCenter>
      <MessagesUl>
        {Messages.map((Msg, index) => {
          return <Message key={index} {...Msg} />;
        })}
      </MessagesUl>
    </RightCenter>
  );
};

export default ActiveChat;
