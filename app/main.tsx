import * as React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';

import store from './redux/store/index';
import Root from './components/Root';
import Theme from './theme';
import { GlobalStyle } from './components/styledcomponents/GlobalStyles';

render(
  <Provider store={ store }>
    <Theme>
      <GlobalStyle />
      <Root />
    </Theme>
  </Provider>,
  document.getElementById('app')
);