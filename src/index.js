import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Home } from './components/Home/home';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleware)(createStore);

const Root = (props) => {
  
  return (
    <Provider store={createStoreWithMiddleWare(reducers)}>
      <Home {...props}/>
    </Provider>
   )
}

ReactDOM.render(<Root />, document.getElementById('root'));

