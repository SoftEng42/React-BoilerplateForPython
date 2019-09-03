import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ConnectedRouter } from "connected-react-router";
import { routerHistory } from "./redux/Router/Router.history";
import { Route, Switch } from 'react-router-dom';
import { ROUTE } from "./redux/Router/Router.routes";
import LoginPage from "./pages/login/Login.wrap";
import HomePage from "./pages/home/Home.wrap";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={routerHistory}>
        <Switch>
          <Route path={ROUTE.LOGIN} component={LoginPage} />
          <Route path={ROUTE.HOME} component={HomePage} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
