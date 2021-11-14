import { combineReducers } from "redux"
import booklistReducer, { booklistInitialState } from "./booklistReducer"
import classlistReducer, { classlistInitalState } from "./classlistReducer"
import classroomReducer, { classroomInitialState } from "./classroomReducer"
import classStudentsReducer, { classStudentsInitalState } from "./classStudentsReducer"
import popupsReducer, { popupsInitialState } from "./popupsReducer"
import studentbookReducer, { studentbookInitialState } from "./studentbookReducer"
import studentReducer, { studentInitialState } from "./studentReducer"
import ThisStudentReducer, { thisStudentInitialState } from "./ThisStudentReducer"
import timestampsReducer, { timestampsInitalState } from "./timestampsReducer"

export const initialState = {
	myList: studentInitialState,
	studentBookList: studentbookInitialState,
	classStudents: classStudentsInitalState,
	classRoster: classroomInitialState,
	popupsList: popupsInitialState,
	classList: classlistInitalState,
	bookList: booklistInitialState,
	thisStudent: thisStudentInitialState,
	timestampsList: timestampsInitalState
}

export default combineReducers({
	myList: studentReducer,
	studentBookList: studentbookReducer,
	classStudents: classStudentsReducer,
	classRoster: classroomReducer,
	popupsList: popupsReducer,
	classList: classlistReducer,
	timestampsList: timestampsReducer,
	bookList: booklistReducer,
	thisStudent: ThisStudentReducer
})
