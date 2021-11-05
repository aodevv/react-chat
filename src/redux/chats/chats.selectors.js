import { createSelector } from "reselect";

const selectChats = (state) => state.chats;

export const selectCurrentChats = createSelector(
  [selectChats],
  (chats) => chats.chatList
);

export const selectActiveList = createSelector(
  [selectChats],
  (chats) => chats.activeList
);
