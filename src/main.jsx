import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { createRoot } from 'react-dom/client';
const store = createStore(rootReducer);




const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
