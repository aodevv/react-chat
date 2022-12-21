const INITAL_STATE = {
  leftMenu: [1, 0, 0, 0],
  chatContainer: false,
};

const leftMenuReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_ICON":
      return {
        ...state,
        leftMenu: action.payload,
      };
    case "COLLAPSE_CHATS":
      return {
        ...state,
        chatContainer: false,
      };
    case "SHOW_CHATS":
      return {
        ...state,
        chatContainer: true,
      };
    default:
      return state;
  }
};

export default leftMenuReducer;
