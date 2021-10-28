import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { refreshToken } from "./redux/reducers/AppReducer";
import { AppStatus, PathType } from "./utils/Helper";
import { MainRoutes } from "./utils/routes";

export default function RoutesWrapper({ children }) {

	const application = useSelector((state) => state.application);
	const dispatch = useDispatch();

	const history = useHistory();

	useEffect(() => {

		setTimeout(() => {
			dispatch(refreshToken());
		}, 2000)


		console.log("Runnung");

	}, [dispatch]);

	useEffect(() => {

		if (application.app_status === AppStatus.LOADING) {
			console.log("Loading");
			return;
		}

		if (!MainRoutes[history.location.pathname.split("/")[1]]) {
			history.push("/error");
			return;
		}

		if (MainRoutes[history.location.pathname.split("/")[1]].path_type === PathType.PROTEDTED && !application.is_user_authenticated) {

			history.push("/login");

		} else if (MainRoutes[history.location.pathname.split("/")[1]].path_type === PathType.AUTHENTICATION && application.is_user_authenticated) {
			history.push("/dashboard");
		}


		
		// if(history.location.pathname[history.location.pathname.length -1] !== "/") {
		// 	history.push(`${history.location.pathname}/`);
		// }

	}, [application, history.location.pathname])


	return (
		<div>
			{
				application.app_status === AppStatus.LOADING ? (
					<div style={{position: "fixed", top: "50%", bottom: "50%", left: "0", right: "0", transform: "translate(0, -40px)"}}>
						<div className="processing-indicator" style={{width: "40px", height: "40px"}}/>
					</div>
				) : (
					children
				)
			}
		</div>
	);
}
