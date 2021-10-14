import { createStore , applyMiddleware ,compose } from 'redux'  //  引入createStore方法
import reducer from './reducer'    
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import mySaga from'./saga.js';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore( reducer, enhancer) // 创建数据存储仓库
sagaMiddleware.run(mySaga)
export default store   //暴露出去
