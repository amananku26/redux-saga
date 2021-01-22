import { createStore,applyMiddleware,combineReducers } from "redux";
import createSagaMiddleware from "redux-saga"
import reducer from "./reducer"
import RootSaga from "../saga/RootSaga"


const SagaMiddleware = createSagaMiddleware()

const store = createStore(reducer,applyMiddleware(SagaMiddleware))

SagaMiddleware.run(RootSaga)
console.log(store.getState())
export default store