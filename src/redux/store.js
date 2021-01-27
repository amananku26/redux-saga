import { createStore,applyMiddleware,combineReducers } from "redux";
import createSagaMiddleware  from "redux-saga"
import FetchDataReducer from './reducer' // if we do not want to use any extra file for rootReducer
import RootSaga from "../saga/RootSaga"
// import RootReducer from "./RootReducer" // if we  want to use  extra file for rootReducer remove this from comment

const RootReducer = combineReducers({// if we do not want to use any extra file for rootReducer
    FetchDataReducer// if we do not want to use any extra file for rootReducer
})// if we do not want to use any extra file for rootReducer

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer , applyMiddleware(sagaMiddleware))

sagaMiddleware.run(RootSaga)

console.log("store ",store.getState())


export default store