import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { ChatPage } from 'pages/ChatPage';
import { load, send } from 'actions/chats';

class ChatPageContainer extends PureComponent {
  componentDidMount() {
    const { loadChats } = this.props;

    loadChats();
  }

  handleMessageSend = (message) => {
    const { sendMessage, chatId } = this.props;

    sendMessage({
      ...message,
      chatId
    });
  }

  render() {
    const { chats, chatId, messages } = this.props;
    return (
      <ChatPage chatId={chatId} chats={chats} messages={messages} sendMessage={this.handleMessageSend} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');
  const { match } = ownProps;

  let messages = null;

  if (match && chats.has(match.params.id)) {
    messages = chats.getIn([match.params.id, 'messages']).toJS();
  }

  return {
    chats: chats.map((entry) => (
      { name: entry.get('name'), link: `/chats/${entry.get('id')}` }
      )).toList().toJS(),
    messages,
    chatId: match ? match.params.id : null
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadChats: () => dispatch(load()),
    sendMessage: (message) => dispatch(send(message)),
  }
}

export const ChatPageRedux = connect(mapStateToProps, mapDispatchToProps)(ChatPageContainer);