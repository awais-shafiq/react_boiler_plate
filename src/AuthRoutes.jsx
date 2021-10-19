import React from "react";
import { Route } from "react-router-dom";

export default function AuthRoute({ children, path, exact }) {
  return (
    <Route path={path} exact={exact}>
      <h3>AuthRoute</h3>
      {children}
    </Route>
  );
}
