export const getChats = () => ({
  type: "GET_CHATS",
});

export const setActiveChats = (list) => ({
  type: "SET_ACTIVE_CHAT",
  payload: list,
});
