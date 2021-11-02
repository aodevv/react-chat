import { combineReducers } from "redux";

import leftMenuReducer from "./leftMenu/LeftMenu.reducer";

const rootReducer = combineReducers({
  leftMenu: leftMenuReducer,
});

export default rootReducer;
