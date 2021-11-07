import {GET_TIMESTAMPS, TIMESTAMPS_ERROR} from '../types'

const initialState = {
  timestampsVal: {} ,
  loading: true
}


export default function(state = initialState, action){
  switch(action.type){
    case GET_TIMESTAMPS:
    // console.log(action.payload)
      return{
        ...state,
        timestampsVal:action.payload,
        loading:false
      }
    case TIMESTAMPS_ERROR:
      return{
        loading:false,
        // error:action.payload
      }
    default: return state
  }
}
