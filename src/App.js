import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContextProvider from "./context/AppContext";
import "./styles.css";
import { Routes } from "./utils/routes";

export default function App() {
  return (
    <div className="App">
      <div className="loader-circle" />
      <BrowserRouter>
        <Switch>
          <AppContextProvider>
            {Routes.paths.map((path, index) => (
              <Route exact={path.exact} path={path.prefix} key={index}>
                {<path.component pageNo={index} />}
              </Route>
            ))}
          </AppContextProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
