import * as React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';

import store from './redux/store/index';
import Root from './components/Root';

render(
  <Provider store={ store }>
    <Root />
  </Provider>,
  document.getElementById('app')
);