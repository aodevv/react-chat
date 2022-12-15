import { Chats, groupChats } from "./chats.data";
import { Messages } from "./chats.data";

const INITAL_STATE = {
  chatList: [],
  groupChatList: [],
  activeList: [],
  messagesList: [],
  currentMessages: [],
  messagesSenders: [],
  currentConversation: "",
};

const chatListReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "GET_CHATS":
      return {
        ...state,
        chatList: Chats,
      };
    case "GET_GROUPCHATS":
      return {
        ...state,
        groupChatList: groupChats,
      };
    case "GET_ALL_MESSAGES":
      return {
        ...state,
        messagesList: Messages,
      };
    case "GET_MESSAGES":
      return {
        ...state,
        currentMessages: action.payload,
      };
    case "SET_MESSAGES":
      return {
        ...state,
        messagesList: action.payload,
      };
    case "SET_CURRENT_MESSAGES":
      return {
        ...state,
        currentMessages: action.payload,
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
    case "SET_GROUPCHATS":
      return {
        ...state,
        groupChatList: action.payload,
      };
    case "SET_ACTIVE_CONVERSATION":
      return {
        ...state,
        currentConversation: action.payload,
      };
    default:
      return state;
  }
};

export default chatListReducer;
