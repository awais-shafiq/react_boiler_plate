import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { refreshToken } from "../redux/reducers/AuthReducer";
import { Routes } from "../utils/routes";

const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const auth_state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  useEffect(() => {
    if (!auth_state.access_token) {
      return;
    }

    Routes.paths.forEach((path) => {
      const shouldOpenDashboard =
        path.isAuthenticated &&
        auth_state.is_user_authenticated &&
        history.location.pathname.includes(path.prefix);

      const shouldOpenLandingPage =
        path.isAuthenticated &&
        !auth_state.is_user_authenticated &&
        history.location.pathname.includes(path.prefix);

      if (shouldOpenDashboard) {
        history.push("/dashboard");
      } else if (shouldOpenLandingPage) {
        history.push("/");
      }
    });
  }, [auth_state, history]);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
