import React from "react";

import Thumbnail from "../Thumbnail/Thumbnail";

import {
  MessageLi,
  MessageContainer,
  MsgTextContainer,
  ChatTime,
  MsgSender,
} from "./Message.styles";

const Message = ({ sender, content, isRight, time, img }) => {
  return (
    <MessageLi isRight={isRight}>
      <MessageContainer>
        <Thumbnail img={img} className="thumbnail" />
        <MsgTextContainer isRight={isRight}>
          <div className="msg-content">
            <p>{content}</p>
            <ChatTime isRight={isRight}>
              <i className="u-vertical-align ri-time-line u-mr-xs"></i>
              <span className="u-vertical-align">{time}</span>
            </ChatTime>
          </div>
          <MsgSender>{sender}</MsgSender>
        </MsgTextContainer>
      </MessageContainer>
    </MessageLi>
  );
};

export default Message;
