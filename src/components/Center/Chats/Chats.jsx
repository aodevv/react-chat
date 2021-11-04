import React from "react";

import { ChatsTop, ChatsBottom } from "./Chats.styles";
import { HeadingPrimary, HeadingSecendary } from "../../utils/Heading/Headings";
import SearchInput from "../../SearchInput/SearchInput";
import FriendsCarousel from "../../FriendsCarousel/FriendsCarousel";
import ChatList from "../../ChatList/ChatList";

const Chats = () => {
  return (
    <div>
      <ChatsTop>
        <HeadingPrimary text="Chats" className="u-mb-s" />
        <SearchInput placeholder="Search Chats" className="u-mb-s" />
        <FriendsCarousel />
      </ChatsTop>
      <ChatsBottom>
        <HeadingSecendary
          text="Recent"
          isBig={true}
          className="u-px-1 u-mb-s"
        />
        <ChatList />
      </ChatsBottom>
    </div>
  );
};

export default Chats;
