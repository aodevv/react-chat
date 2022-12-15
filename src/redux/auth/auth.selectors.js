import { createSelector } from "reselect";

export const selecAuth = (state) => state.auth;

export const selectLoggedIn = createSelector(
  [selecAuth],
  (auth) => auth.loggedIn
);
