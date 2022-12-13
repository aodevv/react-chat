import { createSelector } from "reselect";

export const selectLeftMenu = (state) => state.leftMenu;

export const selectIds = createSelector(
  [selectLeftMenu],
  (leftMenu) => leftMenu
);

export const selectLoggedIn = createSelector(
  [selectLeftMenu],
  (leftMenu) => leftMenu.loggedIn
);
