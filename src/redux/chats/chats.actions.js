export const getChats = () => ({
  type: "GET_CHATS",
});

export const getMessages = (currentMessages) => ({
  type: "GET_MESSAGES",
  payload: currentMessages,
});

export const getAllMessages = () => ({
  type: "GET_ALL_MESSAGES",
});

export const setMessages = (newMessages) => ({
  type: "SET_MESSAGES",
  payload: newMessages,
});

export const setCurrentMessages = (newMessages) => ({
  type: "SET_CURRENT_MESSAGES",
  payload: newMessages,
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

export const toggleActiveChats = (activeChats) => ({
  type: "TOGGLE_ACTIVE_CHATS",
  payload: activeChats,
});

export const setActiveConversation = (convId) => ({
  type: "SET_ACTIVE_CONVERSATION",
  payload: convId,
});
