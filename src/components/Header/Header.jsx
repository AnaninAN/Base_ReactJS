import './Header.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Chat</h1>
      </div>
    );
  }
}