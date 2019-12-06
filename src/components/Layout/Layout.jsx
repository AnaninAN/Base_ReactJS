import './Layout.scss';

import React, { Component } from 'react';

import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';
import { Messenger } from 'components/Messenger';

export class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <div className="layout-chat">
          <ChatList />
          <Messenger />
        </div>
      </div>
    );
  }
}