import {take,call,all} from "redux-saga/effects"

import { watchFetchdata } from "./fetchDataSaga";

export default function* RootSaga(){
    yield all([watchFetchdata()])
}