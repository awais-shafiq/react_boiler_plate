import React, { createContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshToken } from "../redux/reducers/AuthReducer";

const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
