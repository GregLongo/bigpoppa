import { SELECT_STUDENT, UPDATE_ACTIVE_POPUP } from '../actions/thisStudentAction';
const initialState = {
	student: null,
	activePopup: null
}

const reducer = (state, action) => {
	if (typeof state === 'undefined') state = initialState;
	switch (action.type) {
		case SELECT_STUDENT:
			return {
				...state,
				student: action.student
			};
		case UPDATE_ACTIVE_POPUP:
			return {
				...state,
				activePopup: action.activePopup
			}
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as thisStudentInitialState
}
