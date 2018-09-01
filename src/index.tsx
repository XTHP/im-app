import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import App from './App';
import './common/index.less';
import { Provider } from 'react-redux';
import store from './redux/store';
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement);
