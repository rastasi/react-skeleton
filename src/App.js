import React, { Component } from 'react';
import connect from 'redux-connect-decorator'

@connect(state => ({
  exampleValue: state.testGroup.exampleValue
}))
class App extends Component {
  constructor (props) {
    super(props);
    console.log(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>PROP: {this.props.exampleValue}</p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
