import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './shared/App';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import configureStore from './store/configure';
// import api from '../service';
import sagas from './store/sagas';
import './index.scss';
import 'bootstrap/scss/bootstrap.scss';

const initialState = window.__INITIAL_STATE__;
const history = createBrowserHistory();

const store = configureStore(initialState);

store.runSaga(sagas);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./shared/App', () => {
    render(App);
  });
}

registerServiceWorker();
