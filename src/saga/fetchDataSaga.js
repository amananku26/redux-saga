import { call,delay, takeEvery } from "redux-saga/effects";
import {types} from "../redux/types"
import axios from "axios"

function* asyncFetchRequest(action){
    yield  delay(4000)//make delay by 4s to retrive the data
  try{
      const url = `https://reqres.in/api/users/${action.payload}`
      const response  = yield call(()=> axios.get(url))
      console.log(response)
  }
  catch(error){
       console.log(error)
  }
}

export function* watchFetchdata(){
    
   yield takeEvery(types.SEND_REQUEST , asyncFetchRequest)

}