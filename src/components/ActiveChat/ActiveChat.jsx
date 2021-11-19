import React, { useEffect } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMessages } from "../../redux/chats/chats.selectors";
import { setMessagesSenders } from "../../redux/chats/chats.actions";

import { RightCenter, MessagesUl } from "./ActiveChat.styles";
import Message from "../Message/Message";

const ActiveChat = ({ Messages, setMessagesSenders }) => {
  const messagesEndRef = React.createRef();
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    //console.log(Messages);
    if (Messages) {
      setMessagesSenders(Messages.map((msg, index) => msg.received));
      scrollToBottom();
    }
  }, [Messages]);
  return (
    <RightCenter>
      <MessagesUl>
        {Messages
          ? Messages.map((Msg, index) => {
              return <Message key={index} {...Msg} id={index} />;
            })
          : null}
        <div ref={messagesEndRef} />
      </MessagesUl>
    </RightCenter>
  );
};

const mapStateToProps = createStructuredSelector({
  Messages: selectMessages,
});

const mapDispatchToProps = (dispatch) => ({
  setMessagesSenders: (list) => dispatch(setMessagesSenders(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveChat);
