import request from "../request.js"
import { GET_TIMESTAMPS, TIMESTAMPS_ERROR } from "../types"

export const getTimestamps = (classroom, student, bookId, page = 0, size = 30) => async (dispatch) => {
	page = new String(page);
	size = new String(size);
	const url = `class/${classroom}/student/${student}/book/${bookId}/activity?page=${page}&size=${size}`
	const response = request(url)
		.then((resp) => {
			dispatch({
				type: GET_TIMESTAMPS,
				payload: resp.data,
			})
		})
		.catch((exception) => {
			dispatch({
				type: TIMESTAMPS_ERROR,
				payload: exception,
			})
		})
}
