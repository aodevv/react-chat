import { createSelector } from "reselect";

export const selectLeftMenu = (state) => state.leftMenu;

export const selectIds = createSelector(
  [selectLeftMenu],
  (leftMenu) => leftMenu
);

export const selectChatsVisibility = createSelector(
  [selectLeftMenu],
  (leftMenu) => leftMenu.chatContainer
);
