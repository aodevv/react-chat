import React from "react";

import { connect } from "react-redux";
import {
  selectCurrentChats,
  selectActiveList,
} from "../../redux/chats/chats.selectors";
import { createStructuredSelector } from "reselect";
import { setActiveChats } from "../../redux/chats/chats.actions";

import { ChatListContainer } from "./ChatList.styles";
import ChatItem from "../ChatItem/ChatItem";

const ChatList = ({ chats, actives }) => {
  console.log(chats);
  return (
    <ChatListContainer>
      {chats.map((item, index) => {
        return <ChatItem key={index} {...item} />;
      })}
    </ChatListContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  chats: selectCurrentChats,
  actives: selectActiveList,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveChats: (list) => dispatch(setActiveChats(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
