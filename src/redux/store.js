import { createStore,applyMiddleware,combineReducers } from "redux";
import createSagaMiddleware  from "redux-saga"
// import reducer from "./reducer"
import RootSaga from "../saga/RootSaga"
import RootReducer from "./RootReducer"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer , applyMiddleware(sagaMiddleware))

sagaMiddleware.run(RootSaga)

console.log("store ",store.getState())


export default store