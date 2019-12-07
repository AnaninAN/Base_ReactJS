import 'assets/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { routes } from 'src/routes';

ReactDOM.render(
  <Router>
    <Switch>
      {routes.map((route, idx) => <Route key={idx} {...route} />)}
    </Switch>
  </Router>,
  document.getElementById('root')
);