import React, { Component } from 'react';
import i18n from './i18n';
import Header from './layout/Header';
import { Container, Row, Col } from 'reactstrap';

class Layout extends Component {
  render () {
    return (
      <div className='layout'>
        <Header />
        <Container className='main'>
          <Row className='content'>
            <Col>
              <h1 className='title'>{i18n.t('main.helloWorld')}</h1>
              {this.props.children}
            </Col>
          </Row>
          <Row className='footer'>
            <Col>
              <p>Copyright 2019</p>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default Layout;
