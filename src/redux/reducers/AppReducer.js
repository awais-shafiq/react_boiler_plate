import { createSlice } from "@reduxjs/toolkit";
import { AppState, AppStatus, UserRole } from "../../utils/Helper";

export const AppSlice = createSlice({
	name: "Application",
	initialState: {
		app_status: AppStatus.LOADING,
		is_user_authenticated: true,
		access_token: "",
		token_expiry_time: 0,
		role: {
			id: null,
			name: null
		}
	},

	reducers: {
		// login: (state, action) => {
		// 	state.app_status = AppStatus.READY;
		// 	state.is_user_authenticated = true;
		// 	state.access_token = Math.random().toString(36).substr(2);
		// 	state.token_expiry_time = Date.now() / 1000 + 24 * 3600;
		// 	state.role = {
		// 		id: 1,
		// 		name: UserRole.ADMIN
		// 	};
		// },
		// signup: (state, action) => { },
		refreshToken: (state, action) => {
			state.app_status = AppStatus.READY;
			state.is_user_authenticated = true;
			state.access_token = Math.random().toString(36).substr(2);
			state.token_expiry_time = Date.now() / 1000 + 24 * 3600;
			state.role = {
				id: 2,
				name: UserRole.ADMIN
			};
		}
	}
});

export const { login, signup, refreshToken } = AppSlice.actions;

export default AppSlice.reducer;
