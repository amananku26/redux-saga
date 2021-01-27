import { call,delay, takeEvery,put } from "redux-saga/effects";
import {types} from "../redux/types"
import axios from "axios"
import {fetchDataSuccess} from "../redux/action"

function* asyncFetchRequest(action){
  try{
      const url = `https://reqres.in/api/users/${action.payload}`
      const response  = yield call(()=> axios.get(url))
      console.log("fetxchdatasaga",response.data.data.first_name)
      yield put(fetchDataSuccess(response.data.data.first_name))
  }
  catch(error){
       console.log(error)
  }
}

export function* watchFetchdata(){ 
   yield takeEvery(types.SEND_REQUEST , asyncFetchRequest)
}