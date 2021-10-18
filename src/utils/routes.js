export class Routes {
  static get paths() {
    return [
      {
        prefix: "/",
        isAuthenticated: false,
        exact: true,
        component: (props) => <h2>Landing Page {props.pageNo}</h2>
      },
      {
        prefix: "/dashboard",
        isAuthenticated: true,
        component: (props) => <h2>Dashboard Page {props.pageNo}</h2>
      },
      {
        prefix: "/login",
        isAuthenticated: false,
        component: (props) => <h2>Login Page {props.pageNo}</h2>
      },
      {
        prefix: "/suspended",
        isAuthenticated: true,
        component: (props) => <h2>Suspended Page {props.pageNo}</h2>
      }
    ];
  }
}
