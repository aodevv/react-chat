const INITAL_STATE = {
  leftMenu: [1, 0, 0, 0],
  loggedIn: false,
};

const leftMenuReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_ICON":
      return {
        ...state,
        leftMenu: action.payload,
      };

    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default leftMenuReducer;
