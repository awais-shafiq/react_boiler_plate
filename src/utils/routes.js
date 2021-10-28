import { Link, useParams } from "react-router-dom";
import DashboardContainer from "../pages/DashboardContainer";
import { UserRole, PathType } from "./Helper";

export const MainRoutes = Object.freeze({

	"": Object.freeze({
		pathname: "/",
		path_type: PathType.LANDING,
		exact: true,
		has_nested_routes: false,
		component: (props) => <h2>Landing Page {props.pageNo}</h2>
	}),

	"login": Object.freeze({
		pathname: "/login",
		path_type: PathType.AUTHENTICATION,
		has_nested_routes: false,
		component: (props) => <h2>Login Page {props.pageNo}</h2>
	}),

	"dashboard": Object.freeze({
		pathname: "/dashboard",
		path_type: PathType.PROTEDTED,
		has_nested_routes: true,
		component: (props) => {

			return <DashboardContainer />
		},
	}),

	"suspended": Object.freeze({
		pathname: "/suspended",
		path_type: PathType.PROTEDTED,
		has_nested_routes: false,
		component: (props) => <h2>Suspended Page {props.pageNo}</h2>
	}),

	"error": Object.freeze({
		pathname: "/error",
		path_type: PathType.PROTEDTED,
		has_nested_routes: false,
		component: (props) => <h2>Path does not exist {props.pageNo}</h2>
	})


});

export const DashboardRoutes = Object.freeze({

	"": {
		text: "Dashboard",
		pathname: "/",
		exact: true,
		is_menu_item: true,
		required_roles: [UserRole.ADMIN, UserRole.MODERATOR],
		component: () => <h3>Dashboard Page</h3>
	},
	"impacts_list": Object.freeze({
		text: "Impacts",
		pathname: "/impacts",
		exact: true,
		is_menu_item: true,
		required_roles: [UserRole.ADMIN],
		component: () => {
			return (
				<div>
					<h3>Dashboard Page impacts</h3>
					<h5><Link to="/dashboard/impacts/create">Add Impact</Link></h5>
					<h4>Existing Impacts</h4>
					<ol>
						{
							[...Array(20)].map((item, index) => {
								return <li><Link to={`/dashboard/impacts/${index}`}>See Impact Details {index}</Link></li>
							})
						}
					</ol>
				</div>
			)
		}
	}),
	"create_impact": Object.freeze({
		text: "Add Impact",
		pathname: "/impacts/create",
		exact: true,
		is_menu_item: false,
		required_roles: [UserRole.ADMIN],
		component: () => <h3>Dashboard Page impacts Create</h3>
	}),
	"get_impact": Object.freeze({
		pathname: "/impacts/:id",
		exact: true,
		is_menu_item: false,
		required_roles: [UserRole.ADMIN],
		component: () => <h3>Dashboard Page impacts {useParams().id}</h3>
	}),
	"campaigns": Object.freeze({
		text: "Campaigns",
		pathname: "/campaigns",
		exact: true,
		is_menu_item: true,
		required_roles: [UserRole.ADMIN, UserRole.MODERATOR],
		component: () => <h3>Dashboard Page campaigns {useParams().id}</h3>
	})

});

// nested_routes: [
// 	Object.freeze({
// 		text: "Impacts",
// 		pathname: "/impacts",
// 		exact: true,
// 		required_roles: [UserRole.ADMIN],
// 		component: () => <Redirect to="/dashboard/impacts/list/" />
// 	}),
// 	Object.freeze({
// 		text: "Impacts List",
// 		pathname: "/impacts/list",
// 		exact: true,
// 		required_roles: [UserRole.ADMIN],
// 		component: () => <h3><Link to="/dashboard/impacts/create">Dashboard Page impacts </Link></h3>
// 	}),
// 	Object.freeze({
// 		text: "Add Impact",
// 		pathname: "/impacts/create",
// 		exact: true,
// 		required_roles: [UserRole.ADMIN],
// 		component: () => <h3><Link to="/dashboard/impacts/id=:id">Dashboard Page impacts Create </Link></h3>
// 	}),
// 	Object.freeze({
// 		pathname: "/impacts/id=:id",
// 		exact: true,
// 		required_roles: [UserRole.ADMIN],
// 		component: () => <h3><Link to="/dashboard/campaigns">Dashboard Page impacts {useParams().id}</Link></h3>
// 	}),
// 	Object.freeze({
// 		text: "Campaigns",
// 		pathname: "/campaigns",
// 		required_roles: [UserRole.ADMIN, UserRole.MODERATOR],
// 		component: () => <h3><Link to="/dashboard/">Dashboard Page campaigns {useParams().id}</Link></h3>
// 	})
// ]




// export const Routes = Object.freeze({

// 	"": Object.freeze({
// 		pathname: "/",
// 		path_type: PathType.LANDING,
// 		exact: true,
// 		has_nested_routes: false,
// 		component: (props) => <h2>Landing Page {props.pageNo}</h2>
// 	}),

// 	"login": Object.freeze({
// 		pathname: "/login",
// 		path_type: PathType.AUTHENTICATION,
// 		has_nested_routes: false,
// 		component: (props) => <h2>Login Page {props.pageNo}</h2>
// 	}),

// 	"dashboard": Object.freeze({
// 		pathname: "/dashboard",
// 		path_type: PathType.PROTEDTED,
// 		has_nested_routes: true,
// 		component: (props) => {

// 			return <DashboardContainer />
// 		},

// 		nested_routes: [
// 			Object.freeze({
// 				text: "Impacts",
// 				pathname: "/impacts",
// 				exact: true,
// 				required_roles: [UserRole.ADMIN],
// 				component: () => <Redirect to="/dashboard/impacts/list/" />
// 			}),
// 			Object.freeze({
// 				text: "Impacts List",
// 				pathname: "/impacts/list",
// 				exact: true,
// 				required_roles: [UserRole.ADMIN],
// 				component: () => <h3><Link to="/dashboard/impacts/create">Dashboard Page impacts </Link></h3>
// 			}),
// 			Object.freeze({
// 				text: "Add Impact",
// 				pathname: "/impacts/create",
// 				exact: true,
// 				required_roles: [UserRole.ADMIN],
// 				component: () => <h3><Link to="/dashboard/impacts/id=:id">Dashboard Page impacts Create </Link></h3>
// 			}),
// 			Object.freeze({
// 				pathname: "/impacts/id=:id",
// 				exact: true,
// 				required_roles: [UserRole.ADMIN],
// 				component: () => <h3><Link to="/dashboard/campaigns">Dashboard Page impacts {useParams().id}</Link></h3>
// 			}),
// 			Object.freeze({
// 				text: "Campaigns",
// 				pathname: "/campaigns",
// 				required_roles: [UserRole.ADMIN, UserRole.MODERATOR],
// 				component: () => <h3><Link to="/dashboard/">Dashboard Page campaigns {useParams().id}</Link></h3>
// 			})
// 		]

// 	}),

// 	"suspended": Object.freeze({
// 		pathname: "/suspended",
// 		path_type: PathType.PROTEDTED,
// 		has_nested_routes: false,
// 		component: (props) => <h2>Suspended Page {props.pageNo}</h2>
// 	}),

// 	"error": Object.freeze({
// 		pathname: "/error",
// 		path_type: PathType.PROTEDTED,
// 		has_nested_routes: false,
// 		component: (props) => <h2>Path does not exist {props.pageNo}</h2>
// 	})


// });



// export class Routes {
// 	static get paths() {
// 		return [
// 			{
// 				container: "",
// 				pathname: "/",
// 				path_type: PathType.LANDING,
// 				exact: true,
// 				component: (props) => <h2>Landing Page {props.pageNo}</h2>
// 			},
// 			{
// 				container: "dashboard",
// 				pathname: "/dashboard",
// 				path_type: PathType.PROTEDTED,
// 				component: (props) => {
// 					return <h2><Link to="/dashboard/impacts/list">Dashboard Page {props.pageNo}</Link></h2>
// 				},
// 				sub_routes: [
// 					{
// 						pathname: "/impacts",
// 						exact: true,
// 						component: () => <Redirect to="/dashboard/impacts/list/" />
// 					},
// 					{
// 						pathname: "/impacts/list",
// 						exact: true,
// 						component: () => <h3><Link to="/dashboard/impacts/create">Dashboard Page impacts </Link></h3>
// 					},
// 					{
// 						pathname: "/impacts/create",
// 						exact: true,
// 						component: () => <h3><Link to="/dashboard/impacts/id=:id">Dashboard Page impacts Create </Link></h3>
// 					},
// 					{
// 						pathname: "/impacts/id=:id",
// 						exact: true,
// 						component: () => <h3><Link to="/dashboard/campaigns">Dashboard Page impacts {useParams().id}</Link></h3>
// 					},
// 					{
// 						pathname: "/campaigns",
// 						component: () => <DashboardContainer />
// 					}
// 				]
// 			},
// 			{
// 				container: "login",
// 				pathname: "/login",
// 				path_type: PathType.AUTHENTICATION,
// 				component: (props) => <h2>Login Page {props.pageNo}</h2>
// 			},
// 			{
// 				container: "suspended",
// 				pathname: "/suspended",
// 				path_type: PathType.PROTEDTED,
// 				component: (props) => <h2>Suspended Page {props.pageNo}</h2>
// 			}
// 		];
// 	}
// }
