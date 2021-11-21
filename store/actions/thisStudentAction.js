const SELECT_STUDENT = "thisStudentAction/SELECT_STUDENT";
const UPDATE_ACTIVE_POPUP = "thisStudentAction/UPDATE_ACTIVE_POPUP";

const selectStudent = (student) => {
	return {
		type: SELECT_STUDENT,
		student,
		activePopup: null
	}
}

const updateActivePopup = (activePopup) => {
	return {
		type: UPDATE_ACTIVE_POPUP,
		activePopup
	}
}

export {
	SELECT_STUDENT,
	UPDATE_ACTIVE_POPUP,
	selectStudent,
	updateActivePopup
};
