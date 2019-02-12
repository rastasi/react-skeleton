/* global location */
import React, { Component } from 'react';
import i18n from '../i18n';

class LanguageSelector extends Component {
  select (lang) {
    i18n.set(lang);
    location.reload();
  }

  render () {
    return (
      <ul className='LanguageSelector'>
        <li><a href='#' onClick={this.select.bind(this, 'hu')}>HU</a></li>
        <li><a href='#' onClick={this.select.bind(this, 'en')}>EN</a></li>
      </ul>
    );
  }
}

export default LanguageSelector;
