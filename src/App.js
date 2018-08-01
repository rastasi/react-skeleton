import React, { Component } from 'react';
import connect from 'redux-connect-decorator'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './Layout';
import {actions} from './store/actions';

@connect(state => ({
  exampleValue: state.testGroup.exampleValue
}), {
  setExampleValue: actions.setExampleValue
})
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
