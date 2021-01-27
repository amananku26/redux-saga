import {types} from "./types"



const initState = {
    loading:false,
    user:{},
    error:{}
}

const FetchDataReducer  =  (state = initState , action) => {
console.log("reducer",action)
    switch(action.type){
        case types.SEND_REQUEST:
            return{
                ...state,
                loading:true
            }
        case types.SEND_REQUEST_SUCCESS:
            return{
                ...state,
                loading:false,
                user:action.payload,
                error:{}
            }
        case types.SEND_REQUEST_FAILURE:
            return{
                ...state,
                loading:true,
                error:{}
            }
        default: return { state }        
    }
}

export default FetchDataReducer