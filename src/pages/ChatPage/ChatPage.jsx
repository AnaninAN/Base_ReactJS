import './ChatPage.scss';

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ChatHeader } from 'components/ChatHeader';
import { ChatList } from 'components/ChatList';
import { Messenger } from 'components/Messenger';

export class ChatPage extends Component {
  state = {
    chats: {
      '1': {
        id: 1,
        messages: [
          { text: 'Привет! Это чат 1', author: 'Bot' }
        ],
        name: 'Chat 1',
      },
      '2': {
        id: 2,
        messages: [
          { text: 'Привет! Это чат 2', author: 'Bot' }
        ],
        name: 'Chat 2',
      },
      '3': {
        id: 3,
        messages: [
          { text: 'Привет! Это чат 3', author: 'Bot' }
        ],
        name: 'Chat 3',
      }
    },
  };

  render() {
    const { chats } = this.state;
    const { match } = this.props;

    return (
      <div className="chat-page">
        <ChatHeader name={ match && chats[match.params.id] ? chats[match.params.id].name : null } />
        <div className="chat-page__chat">
          <ChatList />
          <Messenger match={match} chats={chats}/>
        </div>
      </div>
    );
  }
}