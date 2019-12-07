import './Messenger.scss';

import React, { Component } from 'react';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';

export class Messenger extends Component {

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
    const { chats, match } = this.props;

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
    const { chats, match } = this.props;

    let messages = null;

    if (match && chats[match.params.id]) {
      messages = chats[match.params.id].messages;
    }

    return messages;
  }

  render() {
    this.state = this.props.chats;
    return (
      <div className="messenger">
        { this.messages ? <MessagesList items={this.messages} /> : 'Выберите чат!' }
        { this.messages && <MessageForm onSend={this.handleMessageSend} /> }
      </div>
    );
  }
}