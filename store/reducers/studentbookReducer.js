import { GET_STUDENT_BOOK, STUDENT_BOOK_ERROR } from "../types"

const initialState = {
	studentBookVal: null,
	loading: true,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_STUDENT_BOOK:
			return {
				...state,
				studentBookVal: action.payload,
				loading: false,
			}
		case STUDENT_BOOK_ERROR:
			return {
				loading: false,
				// error:action.payload
			}
		default:
			return state
	}
}

export {
	initialState as studentbookInitialState
}