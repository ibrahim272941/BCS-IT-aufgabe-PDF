import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './redux/auhtRedux/store';

import { Provider } from 'react-redux';
import { BasePovider } from './contexts/BaseContext';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <Provider store={store}>
    <BasePovider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BasePovider>
  </Provider>,
  document.getElementById('root')
);
