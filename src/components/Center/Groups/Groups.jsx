import React from "react";

import { ChatsTop, ChatsBottom } from "../Chats/Chats.styles";
import { HeadingPrimary, HeadingSecendary } from "../../utils/Heading/Headings";
import SearchInput from "../../SearchInput/SearchInput";

import GroupsList from "../../ChatList/GroupsList";

const Groups = () => {
  return (
    <div>
      <ChatsTop>
        <HeadingPrimary text="Groups" className="u-mb-s" />
        <SearchInput
          placeholder="Search Groups"
          className="u-mb-s"
          type="groups"
        />
      </ChatsTop>
      <ChatsBottom>
        <GroupsList />
      </ChatsBottom>
    </div>
  );
};

export default Groups;
