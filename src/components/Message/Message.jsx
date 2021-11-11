import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMessagesSenders } from "../../redux/chats/chats.selectors";

import Thumbnail from "../Thumbnail/Thumbnail";

import {
  MessageLi,
  MessageContainer,
  MsgTextContainer,
  ChatTime,
  MsgSender,
} from "./Message.styles";

const Message = ({ sender, content, isRight, time, img, id, sendersList }) => {
  return (
    <MessageLi isRight={isRight}>
      <MessageContainer>
        <Thumbnail
          img={img}
          className={`thumbnail ${
            sendersList[id + 1] !== undefined &&
            sendersList[id] === sendersList[id + 1]
              ? "visi-hidden"
              : null
          }`}
        />
        <MsgTextContainer isRight={isRight}>
          <div className="msg-content">
            <p>{content}</p>
            <ChatTime isRight={isRight}>
              <i className="u-vertical-align ri-time-line u-mr-xs"></i>
              <span className="u-vertical-align">{time}</span>
            </ChatTime>
          </div>
          {sendersList[id + 1] !== undefined &&
          sendersList[id] === sendersList[id + 1] ? null : (
            <MsgSender>{sender}</MsgSender>
          )}
        </MsgTextContainer>
      </MessageContainer>
    </MessageLi>
  );
};

const mapStateToProps = createStructuredSelector({
  sendersList: selectMessagesSenders,
});

export default connect(mapStateToProps)(Message);
