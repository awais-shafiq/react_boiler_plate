import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthReducer";

const preloadedState = {
  auth: {
    is_user_authenticated: false,
    access_token: null,
    token_expiry_time: null
  }
};

export default configureStore({
  reducer: {
    auth: authReducer
  },
  preloadedState,
  devTools: true
});
