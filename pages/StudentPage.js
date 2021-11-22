import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Classroom from "../components/Classroom.js"
import StudentPageHeader from "../components/StudentPageHeader.js"
import { getClassroomStudents } from '../store/actions/classStudentsAction.js'
export default function StudentPage({ classroom }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getClassroomStudents(classroom))
	}, [dispatch]);

	const classStudents = useSelector((state) => state.classStudents)
	let { loading, error, students } = classStudents;

	return (
		<div>
			{/* <Teacher teacher={classroom} /> */}
			<StudentPageHeader selectedClass={classroom} />
			<Classroom students={students} classId={classroom} />
		</div>
	)
}

StudentPage.getInitialProps = ({ query: { classroom } }) => {
	return { classroom }
}
