import './Messenger.scss';

import React, { Component } from 'react';

import { ChatList } from 'components/ChatList';
import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';

export class Messenger extends Component {
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
  }

  componentDidUpdate() {
    if (this.messages.length) {
      const { author } = this.messages[this.messages.length - 1];

      if (author !== 'Bot') {
        setTimeout(() => {
          this.handleMessageSend({text: `Привет, ${author}! Бот на связи!`, author: 'Bot'});
        }, 1000);
      }
    }
  }

  handleMessageSend = (message) => {
    const { chats } = this.state;
    const { match } = this.props;

    const chat = chats[match.params.id];
    const messages = [...this.messages, message];
    chat.messages = messages;

    this.setState({
      chats: {
        ...this.state.chats,
        [match.params.id]: chat,
      }
    });
  }

  get messages() {
    const { chats } = this.state;
    const { match } = this.props;

    let messages = null;

    if (match && chats[match.params.id]) {
      messages = chats[match.params.id].messages;
    }

    return messages;
  }

  render() {
    return (
      <div className="chat">
        <ChatList />
        <div className="messenger">
          { this.messages ? <MessagesList items={this.messages} /> : 'Выберите чат!' }
          { this.messages && <MessageForm onSend={this.handleMessageSend} /> }
        </div>
      </div>
    );
  }
}