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
			let bookName;
			let classStudents = resp.data || [];
			for (let i = 0; i < classStudents.length; i++) {
				if (classStudents[i].hasOwnProperty('nowReading')) {
					bookName = classStudents[i].nowReading;
					break;
				}
			}
			// TODO: Define constant mappings?
			if (bookName) {
				bookName = new String(bookName).trim();
				if (bookName == 'BC001') {
					bookName = 'Boxcar Children'
				} else if (bookName == 'AFARM' || bookName == 'AFarmAR') {
					bookName = 'Animal Farm'
				} else if (bookName == 'Romeo') {
					bookName = "Romeo and Juliet"
				}
			}
			console.log("bookName", bookName)
			dispatch({
				type: SET_CLASSROOM_STUDENTS,
				classroom: thisClass,
				payload: classStudents,
				bookName
			})
		})
		.catch((exception) => {
			dispatch({
				type: CLASSROOM_STUDENTS_ERROR,
				payload: exception,
			})
		})
}

export const clearClassroomStudents = () => {
	return {
		type: CLEAR_CLASSROOM_STUDENTS
	}
}