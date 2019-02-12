/* global location */
import React, { Component } from 'react';
import i18n from '../i18n';
import {DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle} from 'reactstrap';

class LanguageSelector extends Component {
  select (lang) {
    i18n.set(lang);
  }

  render () {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          {i18n.t('main.language')}
        </DropdownToggle>
        <DropdownMenu direction={'right'}>
          <DropdownItem>
            <a href='#' onClick={this.select.bind(this, 'hu')}>HU</a>
          </DropdownItem>
          <DropdownItem>
            <a href='#' onClick={this.select.bind(this, 'en')}>EN</a>
          </DropdownItem>
          <DropdownItem divider />
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

export default LanguageSelector;
