export function PathType() {
  return {
    PROTEDTED: "protected",
    LANDING: "landing",
    AUTH: "auth"
  };
}

export class Routes {
  static get paths() {
    return [
      {
        prefix: "",
        pathname: "/",
        isAuthenticated: false,
        pathType: PathType().LANDING,
        exact: true,
        component: (props) => <h2>Landing Page {props.pageNo}</h2>
      },
      {
        prefix: "dashboard",
        pathname: "/dashboard",
        isAuthenticated: true,
        pathType: PathType().PROTEDTED,
        component: (props) => <h2>Dashboard Page {props.pageNo}</h2>,
        sub_routes: [
          {
            exact: true,
            pathname: "/",
            component: () => <h3>Dashboard Page sub routes</h3>
          },
          {
            pathname: "/impacts",
            component: () => <h3>Dashboard Page impacts</h3>
          },
          {
            pathname: "/campaigns",
            component: () => <h3>Dashboard Page campaigns</h3>
          }
        ]
      },
      {
        prefix: "login",
        pathname: "/login",
        isAuthenticated: false,
        pathType: PathType().AUTH,
        component: (props) => <h2>Login Page {props.pageNo}</h2>
      },
      {
        prefix: "suspended",
        pathname: "/suspended",
        isAuthenticated: true,
        pathType: PathType().PROTEDTED,
        component: (props) => <h2>Suspended Page {props.pageNo}</h2>
      }
    ];
  }
}
