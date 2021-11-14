import request from "../request.js"
import { GET_TIMESTAMPS, TIMESTAMPS_ERROR } from "../types"

export const getTimestamps = (classroom, student) => async (dispatch) => {
	const url = `class/${classroom}/student/${student}/book/BC001/activity?page=1&limit=1`
	const response = request(url)
		.then((resp) => {
			// console.log(resp.data)
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
