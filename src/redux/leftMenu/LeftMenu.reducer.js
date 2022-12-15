const INITAL_STATE = {
  leftMenu: [1, 0, 0, 0],
};

const leftMenuReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_ICON":
      return {
        ...state,
        leftMenu: action.payload,
      };
    default:
      return state;
  }
};

export default leftMenuReducer;
