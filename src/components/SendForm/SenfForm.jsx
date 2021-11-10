import React, { useState } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setMessages } from "../../redux/chats/chats.actions";
import { selectMessages } from "../../redux/chats/chats.selectors";

import { Form, FormContainer, SendButton } from "./SendForm.styles";
import { SearchInputStyled } from "../SearchInput/SearchInput.styles";

const SenfForm = ({ messages, setMessages }) => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      sender: "Lalo Salamnca",
      content: message,
      isRight: true,
      time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      img: null,
      received: false,
    };
    setMessages([...messages, newMessage]);
    setMessage("");
  };
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <div className="input">
          <SearchInputStyled
            placeholder="Boba"
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
  messages: selectMessages,
});

const mapDispatchToProps = (dispatch) => ({
  setMessages: (newMessages) => dispatch(setMessages(newMessages)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SenfForm);
