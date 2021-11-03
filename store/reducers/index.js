import { combineReducers } from 'redux'
import studentReducer from './studentReducer'
import classroomReducer from './classroomReducer'

export default combineReducers({
  myList: studentReducer,
  classRoster: classroomReducer
})
