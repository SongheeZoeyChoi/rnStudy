/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';

import { createStore, applyMiddleware, compose } from 'redux'; 
import { Provider } from 'react-redux';
import promiseMeddleware from 'redux-promise';
import reducers from './app/store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;// 리덕스 개발자 도구와 미들웨어를 같이 사용 위해 필요, 일반컴포즈도 같이 쓰기위해 compose


// 미들웨어 활용한 store 생성 
const createStoreWithMiddleware = createStore(reducers, composeEnhancers(
    applyMiddleware(promiseMeddleware) // 미들웨서 쓰기위해 applyMiddleware(promiseMeddleware) 넣음.
))

const appRedux = () => (
    //Provider안에 store를 만들어줌, 
    // 우리 앱 전체를 스토어를 Prop으로 받는 Provider로 감싸줌.
    <Provider store={createStoreWithMiddleware}> 
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => appRedux); // App -> appRedux를 바꾸고 함수를 만듦 
