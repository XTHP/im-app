import * as React from 'react';
import './common/App.css';
import Login from '@/pages/login/login';
import Main from '@/pages/main/main';
import { Route } from "react-router-dom";

class App extends React.Component {
  public render() {
    return (
      <>
        <Route exact={true} path="/Login" component={Login} />
        <Route exact={true} path="/" component={Main} />
      </>
    );
  }
}

export default App;
