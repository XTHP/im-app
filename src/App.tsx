import * as React from 'react';
import './common/App.css';

import Login from '@/pages/login/login';
import Main from '@/pages/main/main';
import { Provider } from 'react-redux';
import { Route } from "react-router-dom";
import store from './redux/store';
class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <>
          <Route exact={true} path="/" component={Login} />
          <Route exact={true} path="/main" component={Main} />
        </>
      </Provider>
    );
  }
}

export default App;
