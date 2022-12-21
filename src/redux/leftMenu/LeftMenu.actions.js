export const toggleActive = (ids) => ({
  type: "TOGGLE_ICON",
  payload: ids,
});

export const collapseChats = () => ({
  type: "COLLAPSE_CHATS",
});

export const showChats = () => ({
  type: "SHOW_CHATS",
});
