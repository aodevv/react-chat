import { Chats } from "./chats.data";

const INITAL_STATE = {
  chatList: [],
  activeList: [],
};

const chatListReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "GET_CHATS":
      return {
        ...state,
        chatList: Chats,
      };
    case "SET_ACTIVE_CHAT":
      return {
        ...state,
        activeList: action.payload,
      };
    default:
      return state;
  }
};

export default chatListReducer;
