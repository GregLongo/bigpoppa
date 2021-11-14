import request from "../request.js";
import { GET_STUDENT, STUDENT_ERROR } from "../types";

export const getStudent = (classroom, student) => async (dispatch) => {
	if (typeof classroom == 'undefined' || typeof student == 'undefined') return;
	const url = `class/${classroom}/student/${student}`
	const response = request(url)
		.then((resp) => {
			// console.log(resp.data)
			dispatch({
				type: GET_STUDENT,
				payload: resp.data,
			})
		})
		.catch((exception) => {
			dispatch({
				type: STUDENT_ERROR,
				payload: exception,
			})
		})
}