import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentGroupChats } from "../../redux/chats/chats.selectors";

import { ChatListContainer } from "./ChatList.styles";
import GroupItem from "../ChatItem/GroupItem";

const GroupsList = ({ groupChats }) => {
  return (
    <ChatListContainer>
      {groupChats.map((chat, id) => (
        <GroupItem key={id} name={chat.name} unread={chat.unread} />
      ))}
    </ChatListContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  groupChats: selectCurrentGroupChats,
});

export default connect(mapStateToProps)(GroupsList);
