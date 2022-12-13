export const toggleActive = (ids) => ({
  type: "TOGGLE_ICON",
  payload: ids,
});

export const login = () => ({
  type: "LOGIN",
});

export const logout = () => ({
  type: "LOGOUT",
});
