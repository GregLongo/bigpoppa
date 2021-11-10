import {GET_STUDENT_BOOK, STUDENT_BOOK_ERROR} from '../types'

const initialState = {
  studentBookVal: {} ,
  loading: true
}


export default function(state = initialState, action){
  switch(action.type){
    case GET_STUDENT_BOOK:
    // console.log(action.payload)

      return{
        ...state,
        studentBookVal:action.payload,
        loading:false
      }
    case STUDENT_BOOK_ERROR:
      return{
        loading:false,
        // error:action.payload
      }
    default: return state
  }
}
