import { configureStore } from "@reduxjs/toolkit";
import { AppStatus } from "../utils/Helper";
import appReducer from "./reducers/AppReducer";


export default configureStore({
	reducer: {
		application: appReducer
	},
	devTools: true
});
