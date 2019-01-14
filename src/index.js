import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import IntlWrapper from './IntlWrapper';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <IntlWrapper>
      <App />
    </IntlWrapper>
  </Provider>,
  document.getElementById('root')
);
