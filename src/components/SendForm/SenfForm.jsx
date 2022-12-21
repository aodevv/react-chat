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
  setCurrentMessages,
  convId,
  allMessages,
  inactive,
}) => {
  const [message, setMessage] = useState("");
  const formatTime = (str) => {
    return str.length === 1 ? "0" + str : str;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inactive) {
      const newMessage = {
        sender: "You",
        content: message,
        isRight: true,
        time: `${formatTime(new Date().getHours())}:${formatTime(
          new Date().getMinutes()
        )}`,
        img: "/images/oussama.jpg",
        received: false,
      };
      setMessagesSenders(
        [...messages, newMessage].map((msg, index) => msg.received)
      );
      const newMessagesList = [...messages, newMessage];
      setCurrentMessages([...messages, newMessage]);
      // console.log(newMessagesList);
      const convIdInt = { cnv1: 0, cnv2: 1, cnv3: 2, cnv4: 3 };
      const allMessagesCopy = structuredClone(allMessages);
      const newAllMessages = allMessagesCopy.map((conv, id) => {
        // console.log(id, convIdInt[convId]);
        if (id === convIdInt[convId]) {
          return newMessagesList;
        } else {
          return conv;
        }
      });
      setMessages(newAllMessages);

      setMessage("");
    }
  };

  const handleInput = (e) => {
    if (inactive) {
      e.preventDefault();
    } else {
      setMessage(e.target.value);
    }
  };

  return (
    <FormContainer>
      <Form inactive={inactive} onSubmit={handleSubmit}>
        <div className="input">
          <SearchInputStyled
            inactive={inactive}
            placeholder="Type message..."
            value={message}
            disabled={inactive}
            onChange={handleInput}
          />
        </div>
        <div className="btn">
          <SendButton inactive={inactive}>
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
  setCurrentMessages: (messages) => dispatch(setCurrentMessages(messages)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SenfForm);
