import request from "../request.js"
import { CLASSROOM_ERROR, GET_CLASSROOM } from "../types"

export const getClassroom = (thisClass) => async (dispatch) => {
	if (typeof thisClass == 'undefined' || !String(thisClass)) return;
	const url = `class/${thisClass}/student`
	const response = request(url)
		.then((resp) => {
			dispatch({
				type: GET_CLASSROOM,
				payload: resp.data,
			})
		})
		.catch((exception) => {
			dispatch({
				type: CLASSROOM_ERROR,
				payload: exception,
			})
		})
}
