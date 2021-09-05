import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./lib/routes";

function App() {
  const { restricted, unrestricted } = routes;
  return (
    <BrowserRouter>
      <Switch>
        {unrestricted.map(({ path, component }) => (
          <Route exact path={path} component={component} key={path} />
        ))}
        {restricted.map(({ path, component }) => (
          <Route exact path={path} component={component} key={path} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
