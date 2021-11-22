import request from "../request.js";
import { CLASSROOM_STUDENTS_ERROR, CLEAR_CLASSROOM_STUDENTS, GET_CLASSROOM_STUDENTS, SET_CLASSROOM_STUDENTS } from "../types";

export const getClassroomStudents = (thisClass) => async (dispatch) => {
	if (typeof thisClass == 'undefined' || !String(thisClass)) return;
	dispatch({
		type: GET_CLASSROOM_STUDENTS
	})
	const url = `class/${thisClass}/student/info`
	const response = request(url)
		.then((resp) => {
			dispatch({
				type: SET_CLASSROOM_STUDENTS,
				classroom: thisClass,
				payload: resp.data,
			})
		})
		.catch((exception) => {
			dispatch({
				type: CLASSROOM_STUDENTS_ERROR,
				payload: exception,
			})
		})
}

export const clearClassroomStudents = ()=>{
	return {
		type: CLEAR_CLASSROOM_STUDENTS
	}
}