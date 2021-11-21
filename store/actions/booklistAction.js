import request from "../request.js"
import { BOOKLIST_ERROR, GET_BOOKLIST } from "../types"

export const getBookList = () => async (dispatch) => {
	const url = `book/`
	const response = request(url)
		.then((resp) => {
			dispatch({
				type: GET_BOOKLIST,
				payload: resp.data,
			})
		})
		.catch((exception) => {
			dispatch({
				type: BOOKLIST_ERROR,
				payload: exception,
			})
		})
}
