import React, { Component } from 'react';
import connect from 'redux-connect-decorator'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './Layout';

@connect(state => ({
  exampleValue: state.testGroup.exampleValue
}))
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          {/* <Route path='/test' component={} /> */}
        </Layout>
      </BrowserRouter>
    );
  }
}
export default App;
