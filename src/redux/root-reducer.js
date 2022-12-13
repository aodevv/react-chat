import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import leftMenuReducer from "./leftMenu/LeftMenu.reducer";
import friendListReducer from "./friendList/friendList.reducer";
import chatListReducer from "./chats/chats.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["leftMenu"],
};

const rootReducer = combineReducers({
  leftMenu: leftMenuReducer,
  friendList: friendListReducer,
  chats: chatListReducer,
});

export default persistReducer(persistConfig, rootReducer);
