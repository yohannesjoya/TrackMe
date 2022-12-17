import React, { createContext, useContext, useReducer, useState } from "react";

const GlobalState = createContext();
const GlobalContextProvider = ({ children, initialState, reducer }) => {
  return (
    <GlobalState.Provider value={useReducer(reducer, initialState)}>
      {children}
    </GlobalState.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalState);

export default GlobalContextProvider;

