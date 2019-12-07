import './Layout.scss';

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';
import { routes } from 'src/routes';

export class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <Router>
          <Switch>
            {routes.map((route, idx) => <Route key={idx} {...route} />)}
          </Switch>
        </Router>
      </div>
    );
  }
}