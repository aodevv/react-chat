import { Chats } from "./chats.data";
import { Messages } from "./chats.data";

const INITAL_STATE = {
  chatList: [],
  activeList: [],
  messagesList: [],
  messagesSenders: [],
};

const chatListReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "GET_CHATS":
      return {
        ...state,
        chatList: Chats,
      };
    case "GET_MESSAGES":
      return {
        ...state,
        messagesList: Messages,
      };
    case "SET_MESSAGES":
      return {
        ...state,
        messagesList: action.payload,
      };
    case "SET_MESSAGES_SENDERS":
      return {
        ...state,
        messagesSenders: action.payload,
      };
    case "SET_ACTIVE_CHAT":
      return {
        ...state,
        activeList: action.payload,
      };
    case "SET_CHATS":
      return {
        ...state,
        chatList: action.payload,
      };
    default:
      return state;
  }
};

export default chatListReducer;
