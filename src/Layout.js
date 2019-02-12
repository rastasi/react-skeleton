import React, { Component } from 'react';
import i18n from './i18n';
import LanguageSelector from './layout/LanguageSelector';

class Layout extends Component {
  render () {
    return (
      <div className='App'>
        <header className='header'>
          <LanguageSelector />
          <h1 className='title'>{i18n.t('main.helloWorld')}</h1>
        </header>
        {this.props.children}
        <footer>Copyright 2019</footer>
      </div>
    );
  }
}

export default Layout;
