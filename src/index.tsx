import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'babel-polyfill';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { MuiThemeProvider } from 'material-ui/styles';

import App from './app';
import reducers from './app/reducers/index';
import ErrorBoundary from './ErrorBoundary';

const store = process.env.itIsDev && createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
  || createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>,
    document.getElementById('root') as HTMLElement
);