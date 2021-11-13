import { GET_POPUPS, POPUPS_ERROR } from "../types"
import axios from "axios"
import request from "../request.js"

export const getPopups = (book) => async (dispatch) => {
	const url = `book/${book}`
	const response = request(url)
		.then((resp) => {
			// console.log(resp.data)
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
