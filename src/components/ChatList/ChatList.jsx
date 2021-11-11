import React, { useEffect } from "react";

import { connect } from "react-redux";
import {
  selectCurrentChats,
  selectActiveList,
} from "../../redux/chats/chats.selectors";
import { createStructuredSelector } from "reselect";
import { setActiveChats } from "../../redux/chats/chats.actions";

import { ChatListContainer } from "./ChatList.styles";
import ChatItem from "../ChatItem/ChatItem";

const ChatList = ({ chats, actives, setActiveChats }) => {
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
            setActiveChats={setActiveChats}
          />
        );
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
