export const getChats = () => ({
  type: "GET_CHATS",
});

export const getMessages = () => ({
  type: "GET_MESSAGES",
});

export const setMessagesSenders = (list) => ({
  type: "SET_MESSAGES_SENDERS",
  payload: list,
});

export const setActiveChats = (list) => ({
  type: "SET_ACTIVE_CHAT",
  payload: list,
});

export const setChats = (chats) => ({
  type: "SET_CHATS",
  payload: chats,
});
