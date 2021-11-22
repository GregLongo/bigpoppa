import { GET_CLASSROOM_STUDENTS, CLASSROOM_STUDENTS_ERROR, SET_CLASSROOM_STUDENTS, CLEAR_CLASSROOM_STUDENTS } from "../types"

const initialState = {
	students: [],
	classRoom: null,
	loading: true,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_CLASSROOM_STUDENTS:
			// console.log(action.payload)
			return {
				...state,
				students: action.payload,
				classRoom: action.classRoom,
				loading: false,
			}
		case GET_CLASSROOM_STUDENTS:
			return {
				...state,
				loading: true,
			}
		case CLEAR_CLASSROOM_STUDENTS:
			return initialState;
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