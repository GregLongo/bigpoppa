import { SELECT_STUDENT } from '../actions/thisStudentAction';
const initialState = {
	student: null
}

const reducer = (state, action) => {
	if (typeof state === 'undefined') state = initialState;
	switch (action.type) {
		case SELECT_STUDENT:
			return {
				...state,
				student: action.student
			};
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as thisStudentInitialState
}
