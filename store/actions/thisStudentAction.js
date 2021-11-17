const SELECT_STUDENT = "thisStudentAction/SELECT_STUDENT";

const selectStudent = (student) => {
	return {
		type: SELECT_STUDENT,
		student
	}
}
export {
	SELECT_STUDENT,
	selectStudent
};
