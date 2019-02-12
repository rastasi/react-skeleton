import React, { Component } from 'react';
import connect from 'redux-connect-decorator';
import { BrowserRouter, Route } from 'react-router-dom';

import { actions } from './store/actions';
import Layout from './Layout';
import Home from './pages/Home';

@connect(
  state => ({
    exampleValue: state.testGroup.exampleValue
  }),
  {
    setExampleValue: actions.setExampleValue
  }
)
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path='/' component={Home} />
        </Layout>
      </BrowserRouter>
    );
  }
}
export default App;
