import React from "react";
import { Route } from "react-router-dom";

export default function ProtectedRoute({ children, path, exact }) {
  return (
    <Route path={path} exact={exact}>
      <h3>ProtectedRoute</h3>
      {children}
    </Route>
  );
}
