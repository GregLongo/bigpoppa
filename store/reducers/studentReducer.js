import {GET_STUDENT, STUDENT_ERROR} from '../types'

const initialState = {
  studentVal: [] ,
  loading: true
}


export default function(state = initialState, action){
  switch(action.type){
    case GET_STUDENT:
      return{
        ...state,
        studentVal:action.payload,
        loading:false
      }
    case STUDENT_ERROR:
      return{
        loading:false,
        // error:action.payload
      }
    default: return state
  }
}
