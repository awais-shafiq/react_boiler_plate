import React from "react";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { DashboardRoutes } from "../utils/routes";

export default function SideBar(props) {

	const application = useSelector((state) => state.application)


	return (
		<div style={{ width: "200px", height: "100vh", background: "#FFF", borderRight: "1px solid #0a0a0a" }}>

			{
				Object.values(DashboardRoutes).map((route, index) => {
					if (route.is_menu_item && route.required_roles.includes(application.role.name)) {

						return (
							<Link to={`/dashboard${route.pathname}`}>
								<div style={{ width: "100%", borderTop: "1px solid #a1a1a1" }} key={index}>
									{route.text}
								</div>
							</Link>
						);
					}
				})
			}

		</div>
	)

}