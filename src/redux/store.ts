import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { SelfReducer } from './login'
// import { routerReducer } from 'react-router-redux'
// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
const reducer = combineReducers({
    SelfReducer,
    // routing: routerReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store