import { GET_BOOKLIST, BOOKLIST_ERROR } from "../types"

const initialState = {
	booklistVal: [],
	loading: true,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_BOOKLIST:
			return {
				...state,
				booklistVal: action.payload,
				loading: false,
			}
		case BOOKLIST_ERROR:
			return {
				loading: false,
				// error:action.payload
			}
		default:
			return state
	}
}


export {
	initialState as booklistInitialState
}