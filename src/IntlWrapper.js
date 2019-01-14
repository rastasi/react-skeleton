import { IntlProvider } from 'react-intl';
import connect from 'redux-connect-decorator';
import messages_en from './translations/en.json';
import messages_hu from './translations/hu.json';
import React, { Component } from 'react';

const messages = {
  hu: messages_hu,
  en: messages_en
};
@connect(state => ({
  locale: state.localeGroup.locale
}))
class IntlWrapper extends Component {
  render() {
    return (
      <IntlProvider
        key={this.props.locale}
        locale='en'
        messages={messages[this.props.locale]}
      >
        {this.props.children}
      </IntlProvider>
    );
  }
}

export default IntlWrapper;
