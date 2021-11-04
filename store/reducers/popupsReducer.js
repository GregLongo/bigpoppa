import {GET_POPUPS, POPUPS_ERROR} from '../types'

const initialState = {
  popupsVal: {} ,
  loading: true
}


export default function(state = initialState, action){
  switch(action.type){
    case GET_POPUPS:
      return{
        ...state,
        popupsVal:action.payload,
        loading:false
      }
    case POPUPS_ERROR:
      return{
        loading:false,
        // error:action.payload
      }
    default: return state
  }
}
