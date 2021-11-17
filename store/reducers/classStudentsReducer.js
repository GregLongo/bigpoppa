import { GET_CLASSROOM_STUDENTS, CLASSROOM_STUDENTS_ERROR } from "../types"

const initialState = {
	students: [],
	loading: true,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_CLASSROOM_STUDENTS:
			// console.log(action.payload)
			return {
				...state,
				students: action.payload,
				loading: false,
			}
		case CLASSROOM_STUDENTS_ERROR:
			return {
				loading: false,
				// error:action.payload
			}
		default:
			return state
	}
}


export {
	initialState as classStudentsInitalState
}