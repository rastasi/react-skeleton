import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
        <div className="App">
          <header className="header">
            <h1 className="title">Welcome to React</h1>
          </header>
            {this.props.children}
          <footer>
            Copyright 2018
          </footer>
        </div>
    );
  }
}

export default Layout;
