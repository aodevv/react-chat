import { Friends } from "./friendList.data";

const INITAL_STATE = {
  friendList: [],
};

const friendListReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "GET_FRIENDS":
      return {
        ...state,
        friendList: Friends,
      };
    default:
      return state;
  }
};

export default friendListReducer;
