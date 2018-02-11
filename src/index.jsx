import {render} from 'react-dom';
import React from 'react';

import App from './app/containers/toDo.jsx';
import './style.scss';

render(
  <App />,
  document.getElementById('root')
);