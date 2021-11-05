import { createSelector } from "reselect";

const selectFriends = (state) => state.friendList;

export const selectCurrentFriends = createSelector(
  [selectFriends],
  (friendList) => friendList.friendList
);
