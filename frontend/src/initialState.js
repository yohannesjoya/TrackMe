export const initialState = {
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, user: action.user };

    default:
      break;
  }
};
