import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCurrentConversation,
  selectCurrentChats,
} from "../../redux/chats/chats.selectors";

import { selectChatsVisibility } from "../../redux/leftMenu/LeftMenu.selectors";

import ChatHeader from "../../components/ChatHeader/ChatHeader";
import ActiveChat from "../../components/ActiveChat/ActiveChat";
import SenfForm from "../../components/SendForm/SenfForm";
import "./Right.scss";

const Right = ({ convId, chatList, chatsVisibility }) => {
  const [curName, setCurName] = useState("");
  const [curStatus, setCurStatus] = useState("");
  const [curImg, setCurImg] = useState(null);
  const [inactive, setInactive] = useState(true);

  useEffect(() => {
    const found = chatList.find((chat) => chat.id === convId);
    if (found) {
      setInactive(false);
      setCurName(found.name);
      setCurStatus(found.status);
      setCurImg(found.img);
    } else setCurName("");
  }, [convId, chatList]);

  return (
    <div className={`Right ${chatsVisibility ? "visible" : ""}`}>
      <ChatHeader
        inactive={inactive}
        img={curImg}
        status={curStatus}
        name={curName}
      />
      <ActiveChat inactive={inactive} />
      <SenfForm inactive={inactive} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  convId: selectCurrentConversation,
  chatList: selectCurrentChats,
  chatsVisibility: selectChatsVisibility,
});

export default connect(mapStateToProps)(Right);
