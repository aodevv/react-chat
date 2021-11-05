import { combineReducers } from "redux";

import leftMenuReducer from "./leftMenu/LeftMenu.reducer";
import friendListReducer from "./friendList/friendList.reducer";
import chatListReducer from "./chats/chats.reducer";

const rootReducer = combineReducers({
  leftMenu: leftMenuReducer,
  friendList: friendListReducer,
  chats: chatListReducer,
});

export default rootReducer;
