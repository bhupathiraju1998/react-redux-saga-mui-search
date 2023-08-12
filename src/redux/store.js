import {applyMiddleware,createStore} from "redux"
import logger from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import rootSaga from './sagas'


const sagaMiddleWarre = createSagaMiddleware();
const middleware = [sagaMiddleWarre];

if(process.env.NODE_ENV === "development"){
    middleware.push(logger);
}

const store = createStore(rootReducer,applyMiddleware(...middleware));
sagaMiddleWarre.run(rootSaga);

export default store;