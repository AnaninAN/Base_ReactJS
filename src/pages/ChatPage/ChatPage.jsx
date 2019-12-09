import './ChatPage.scss';

import React, { Component } from 'react';

import { ChatHeader } from 'components/ChatHeader';
import { ChatList } from 'components/ChatList';
import { Messenger } from 'components/Messenger';

export class ChatPage extends Component {
  render() {
    const { chatId, chats, messages, sendMessage} = this.props;

    return (
      <div className="chat-page">
        <ChatHeader name={chatId && chats[chatId - 1] ? chats[chatId - 1].name : null} />
        <div className="chat-page__chat">
          <ChatList chats={chats} />
          <Messenger messages={messages} sendMessage={sendMessage} />
        </div>
      </div>
    );
  }
}