import request from "../request.js"
import { GET_STUDENT_BOOK, STUDENT_BOOK_ERROR } from "../types"

export const getStudentBook =
	(classroom, student, book) => async (dispatch) => {
		const url = `class/${classroom}/student/${student}/book/BC001/`
		const response = request(url)
			.then((resp) => {
				dispatch({
					type: GET_STUDENT_BOOK,
					payload: resp.data,
				})
			})
			.catch((exception) => {
				dispatch({
					type: STUDENT_BOOK_ERROR,
					payload: exception,
				})
			})
	}
