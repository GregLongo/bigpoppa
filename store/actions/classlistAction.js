import request from "../request.js"
import { CLASSLIST_ERROR, GET_CLASSLIST } from "../types"

export const getClasslist = () => async (dispatch) => {
	const url = `class/`
	const response = request(url)
		.then((resp) => {
			// console.log(resp.data)
			dispatch({
				type: GET_CLASSLIST,
				payload: resp.data,
			})
		})
		.catch((exception) => {
			dispatch({
				type: CLASSLIST_ERROR,
				payload: exception,
			})
		})
}
