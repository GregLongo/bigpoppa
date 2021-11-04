import {GET_CLASSLIST, CLASSLIST_ERROR} from '../types'

const initialState = {
  classlistVal: {} ,
  loading: true
}


export default function(state = initialState, action){
  switch(action.type){
    case GET_CLASSLIST:
      return{
        ...state,
        classlistVal:action.payload,
        loading:false
      }
    case CLASSLIST_ERROR:
      return{
        loading:false,
        // error:action.payload
      }
    default: return state
  }
}
