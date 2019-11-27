import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.scss';

const messages = ['File setting webpack.config.js', 'File setting .babelrc', 'And something else))'];

const Message = (props) => <li>{props.text}</li>;
const MessageList = (props) => {
    return props.messages.map((message) => <Message text={message} />)
}

const App = () => <div>
  <p>Hello! My name is Andrew. I'm starting to learn ReactJS!</p>
  <ol>
    <MessageList messages={messages} />
  </ol>
</div>;

ReactDOM.render(<App />, document.getElementById('root'));