import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "authentication",
  initialState: {
    is_user_authenticated: false,
    access_token: "",
    token_expiry_time: 0
  },

  reducers: {
    login: (state, action) => {
      state.is_user_authenticated = true;
      state.access_token = Math.random().toString(36).substr(2);
      state.token_expiry_time = Date.now() / 1000 + 24 * 3600;
    },
    signup: (state, action) => {},
    refreshToken: (state, action) => {
      state.is_user_authenticated = false;
      state.access_token = Math.random().toString(36).substr(2);
      state.token_expiry_time = Date.now() / 1000 + 24 * 3600;
    }
  }
});

export const { login, signup, refreshToken } = AuthSlice.actions;

export default AuthSlice.reducer;
