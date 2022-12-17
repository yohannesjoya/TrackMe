export const initialState = {
  user: null,
  cart: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, user: action.res};

    case "LOG_OUT":
      return { ...state, user: null }
    
    
    // case "CREATE_ACC":
    default:
      break;
  }
};

// button
// onclick(
//   dispatch({
//     type: "LOG_in",
//     user: {}
//   })
// );
