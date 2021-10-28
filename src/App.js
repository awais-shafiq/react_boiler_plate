import { BrowserRouter, Route, Switch } from "react-router-dom";
import RoutesWrapper from "./RoutesWrapper";
import "./styles.css";
import { MainRoutes, PathType } from "./utils/routes";
import { useSelector } from "react-redux";

export default function App() {

	const application = useSelector((state) => state.application);

	return (
		<div className="App">

			<BrowserRouter>
				<Switch>
					<RoutesWrapper>
						{

							Object.values(MainRoutes).map((route, index) => {
								return (

									<Route exact={route.exact} path={route.pathname} key={index}>
										<route.component />
										{/* {
											route.has_nested_routes && (
												route.nested_routes.map((nested_route, idx) => {
													if (nested_route.required_roles.includes(application.role.name)) {
														return (
															<Switch>
																<Route exact={nested_route.exact} path={`${route.pathname}${nested_route.pathname}`} key={idx}>
																	{<nested_route.component />}
																</Route>
															</Switch>
														)
													} else {
														return (
															<Route exact={nested_route.exact} path={`${route.pathname}${nested_route.pathname}`} key={idx}>
																<h3>You do not have permission to access this page</h3>
															</Route>
														)
													}
												})
											)
										} */}
									</Route>

								)
							})

							// Routes.paths.map((path, index) => {

							// 	return (
							// 		<Route exact={path.exact} path={path.pathname} key={index}>
							// 			<path.component pageNo={index} />
							// 			{
							// 				path.sub_routes && path.sub_routes.length > 0 && (
							// 					path.sub_routes.map((sub_path, idx) => {
							// 						return (
							// 							<Route path={`${path.pathname}${sub_path.pathname}`} key={idx}>
							// 								{<sub_path.component pageNo={index} />}
							// 							</Route>
							// 						)
							// 					})
							// 				)
							// 			}
							// 		</Route>
							// 	)

							// })
						}
					</RoutesWrapper>
				</Switch>
			</BrowserRouter>
		</div>
	);
}
