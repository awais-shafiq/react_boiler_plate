import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import SideBar from "../components/SideBar";
import { DashboardRoutes } from "../utils/routes";

export default function DashboardContainer(props) {

	const application = useSelector((state) => state.application)
	const history = useHistory();

	const { path } = useRouteMatch();

	function handleClick() {
		history.push("/dashboard");
	}

	return (
		<div>
			{/* <h3>Dashboard Page</h3> */}
			<div style={{ position: "absolute", top: "0", left: "0"}}>
				<SideBar />
			</div>

			<div>
				<Switch>

					{
						Object.values(DashboardRoutes).map((route, index) => {

							if (route.required_roles.includes(application.role.name)) {
								return (
									<Route exact={route.exact} path={`${path}${route.pathname}`}>
										{<route.component />}
									</Route>
								)
							} else {
								return (
									<Route exact={route.exact} path={`${path}${route.pathname}`}>
										<h3><font color="red">You do not have permission to access this page</font></h3>
									</Route>
								)
							}

						})
					}

				</Switch>

			</div>

		</div>
	);

}