import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav
} from 'reactstrap';
import LanguageSelector from './LanguageSelector';

export default class Example extends React.Component {
  render () {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>React Skeleton</NavbarBrand>
          <Nav className='ml-auto' navbar>
            <LanguageSelector />
          </Nav>
        </Navbar>
      </div>
    );
  }
}
