import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCurrentConversation,
  selectCurrentChats,
} from "../../redux/chats/chats.selectors";

import ChatHeader from "../../components/ChatHeader/ChatHeader";
import ActiveChat from "../../components/ActiveChat/ActiveChat";
import SenfForm from "../../components/SendForm/SenfForm";
import "./Right.scss";

const Right = ({ convId, chatList }) => {
  const [curName, setCurName] = useState("");
  const [curStatus, setCurStatus] = useState("");

  console.log(chatList);
  console.log(convId);

  useEffect(() => {
    const found = chatList.find((chat) => chat.id === convId);
    if (found) {
      setCurName(found.name);
      setCurStatus(found.status);
    } else setCurName("");
  });

  return (
    <div className="Right">
      <ChatHeader img={null} status={curStatus} name={curName} />
      <ActiveChat />
      <SenfForm />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  convId: selectCurrentConversation,
  chatList: selectCurrentChats,
});

export default connect(mapStateToProps)(Right);
