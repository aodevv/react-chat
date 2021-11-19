import React, { useState } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  setMessages,
  setMessagesSenders,
  setCurrentMessages,
} from "../../redux/chats/chats.actions";
import {
  selectMessages,
  selectCurrentConversation,
  selectAllMessages,
} from "../../redux/chats/chats.selectors";

import { Form, FormContainer, SendButton } from "./SendForm.styles";
import { SearchInputStyled } from "../SearchInput/SearchInput.styles";

const SenfForm = ({
  messages,
  setMessages,
  setMessagesSenders,
  convId,
  allMessages,
}) => {
  const [message, setMessage] = useState("");
  const formatTime = (str) => {
    return str.length === 1 ? "0" + str : str;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      sender: "Lalo Salamnca",
      content: message,
      isRight: true,
      time: `${formatTime(new Date().getHours())}:${formatTime(
        new Date().getMinutes()
      )}`,
      img: null,
      received: false,
    };
    setMessagesSenders(
      [...messages, newMessage].map((msg, index) => msg.received)
    );
    const newMessagesList = [...messages, newMessage];
    setCurrentMessages([...messages, newMessage]);
    console.log(newMessagesList);
    const newAllMessages = allMessages.map((conv, id) => {
      console.log(id, convId);
      if (id === convId) {
        return newMessagesList;
      } else {
        return conv;
      }
    });
    setMessages(newAllMessages);
    console.log(newAllMessages);

    setMessage("");
  };
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <div className="input">
          <SearchInputStyled
            placeholder="Type message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="btn">
          <SendButton>
            <i className="ri-send-plane-2-fill"></i>
          </SendButton>
        </div>
      </Form>
    </FormContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  allMessages: selectAllMessages,
  messages: selectMessages,
  convId: selectCurrentConversation,
});

const mapDispatchToProps = (dispatch) => ({
  setMessages: (newMessages) => dispatch(setMessages(newMessages)),
  setMessagesSenders: (list) => dispatch(setMessagesSenders(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SenfForm);
