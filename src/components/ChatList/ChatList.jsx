import React, { useEffect } from "react";

import { connect } from "react-redux";
import {
  selectCurrentChats,
  selectActiveList,
  selectAllMessages,
} from "../../redux/chats/chats.selectors";
import { createStructuredSelector } from "reselect";
import {
  setActiveChats,
  setActiveConversation,
  getMessages,
} from "../../redux/chats/chats.actions";

import { ChatListContainer } from "./ChatList.styles";
import ChatItem from "../ChatItem/ChatItem";

const ChatList = ({
  chats,
  actives,
  setActiveChats,
  getMessages,
  messages,
  setActiveConversation,
}) => {
  console.log(chats);
  useEffect(() => {
    setActiveChats(chats.map((chat) => 0));
    //setActiveChats([0, 1, 0, 0]);
  }, []);
  return (
    <ChatListContainer>
      {chats.map((item, index) => {
        return (
          <ChatItem
            key={index}
            {...item}
            index={index}
            actives={actives}
            active={!!actives[index]}
            messages={messages}
            setActiveChats={setActiveChats}
            setActiveConversation={setActiveConversation}
            getMessages={getMessages}
          />
        );
      })}
    </ChatListContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  chats: selectCurrentChats,
  actives: selectActiveList,
  messages: selectAllMessages,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveChats: (list) => dispatch(setActiveChats(list)),
  getMessages: (convId) => dispatch(getMessages(convId)),
  setActiveConversation: (convId) => dispatch(setActiveConversation(convId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
