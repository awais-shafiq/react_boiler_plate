import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthRoute from "./AuthRoutes";
import ProtectedRoute from "./ProtectedRoutes";
import AppContextProvider from "./context/AppContext";
import "./styles.css";
import { Routes, PathType } from "./utils/routes";

export default function App() {
  return (
    <div className="App">
      <div className="loader-circle" />
      <BrowserRouter>
        <Switch>
          <AppContextProvider>
            {Routes.paths.map((path, index) => {
              if (path.pathType === PathType().AUTH) {
                return (
                  <AuthRoute exact={path.exact} path={path.pathname}>
                    {<path.component pageNo={index} />}
                  </AuthRoute>
                );
              } else if (path.pathType === PathType().PROTEDTED) {
                return (
                  <ProtectedRoute exact={path.exact} path={path.pathname}>
                    {<path.component pageNo={index} />}
                  </ProtectedRoute>
                );
              } else {
                return (
                  <Route exact={path.exact} path={path.pathname}>
                    {<path.component pageNo={index} />}
                  </Route>
                );
              }
              // <Route exact={path.exact} path={path.prefix} key={index}>
              //   {<path.component pageNo={index} />}
              // </Route>
            })}
          </AppContextProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
