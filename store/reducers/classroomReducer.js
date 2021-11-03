import {GET_CLASSROOM, CLASSROOM_ERROR} from '../types'

const initialState = {
  classroomVal: {} ,
  loading: true
}


export default function(state = initialState, action){
  switch(action.type){
    case GET_CLASSROOM:
      return{
        ...state,
        classroomVal:action.payload,
        loading:false
      }
    case CLASSROOM_ERROR:
      return{
        loading:false,
        // error:action.payload
      }
    default: return state
  }
}
