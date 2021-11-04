import React from "react";

import { FriendsList } from "./FriendsCarousel.styles";
import Friend from "../Friend/Friend";

const FriendsCarousel = () => {
  const Friends = [
    {
      name: "Bob",
      status: "online",
      img: null,
    },
    {
      name: "Salamnca",
      status: "offline",
      img: null,
    },
    {
      name: "Saad",
      status: "away",
      img: null,
    },
    {
      name: "Mostaphaaaaaa",
      status: "offline",
      img: null,
    },
    {
      name: "Nacho",
      status: "offline",
      img: null,
    },
  ];
  return (
    <FriendsList>
      {Friends.map((friend, index) => {
        return <Friend key={index} {...friend} />;
      })}
    </FriendsList>
  );
};

export default FriendsCarousel;
