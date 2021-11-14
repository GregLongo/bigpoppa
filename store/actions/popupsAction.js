import request from "../request.js"
import { GET_POPUPS, POPUPS_ERROR } from "../types"

export const getPopups = (book) => async (dispatch) => {
	const url = `book/${book}`
	const response = request(url)
		.then((resp) => {
			dispatch({
				type: GET_POPUPS,
				payload: resp.data,
			})
		})
		.catch((exception) => {
			dispatch({
				type: POPUPS_ERROR,
				payload: exception,
			})
		})
}
