import request from "../request.js"
import { CLASSROOM_STUDENTS_ERROR, GET_CLASSROOM_STUDENTS } from "../types"

export const getClassroomStudents = (thisClass) => async (dispatch) => {
	if (typeof thisClass == 'undefined' || !String(thisClass)) return;
	const url = `class/${thisClass}/student/info`
	const response = request(url)
		.then((resp) => {
			dispatch({
				type: GET_CLASSROOM_STUDENTS,
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
