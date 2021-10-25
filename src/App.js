import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./lib/routes";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const { restricted, unrestricted } = routes;
  const { isAuth } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        {unrestricted.map(({ path, component }) => (
          <Route exact path={path} component={component} key={path} />
        ))}
        {isAuth ? (
          restricted.map(({ path, component }) => (
            <Route exact path={path} component={component} key={path} />
          ))
        ) : (
          <Redirect to="/signup" />
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
