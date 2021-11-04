import { combineReducers } from 'redux'
import studentReducer from './studentReducer'
import classroomReducer from './classroomReducer'
import popupsReducer from './popupsReducer'
import classlistReducer from './classlistReducer'
import timestampsReducer from './timestampsReducer'

export default combineReducers({
  myList: studentReducer,
  classRoster: classroomReducer,
  popupsList: popupsReducer,
  classList: classlistReducer,
  timestampsList: timestampsReducer
})
