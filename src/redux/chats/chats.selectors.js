import { createSelector } from "reselect";

const selectChats = (state) => state.chats;

export const selectCurrentChats = createSelector(
  [selectChats],
  (chats) => chats.chatList
);

export const selectMessages = createSelector(
  [selectChats],
  (chats) => chats.currentMessages
);

export const selectAllMessages = createSelector(
  [selectChats],
  (chats) => chats.messagesList
);

export const selectMessagesSenders = createSelector(
  [selectChats],
  (chats) => chats.messagesSenders
);

export const selectActiveList = createSelector(
  [selectChats],
  (chats) => chats.activeList
);

export const selectSearchChats = createSelector(
  [selectChats],
  (chats) => chats.searchChats
);

export const selectCurrentConversation = createSelector(
  [selectChats],
  (chats) => chats.currentConversation
);
