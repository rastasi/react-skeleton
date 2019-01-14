import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
class Layout extends Component {
  render() {
    return (
      <div className='App'>
        <header className='header'>
          <h1 className='title'>
            {' '}
            <FormattedMessage id='react' />
          </h1>
        </header>
        {this.props.children}
        <footer>Copyright 2018</footer>
      </div>
    );
  }
}

export default Layout;
