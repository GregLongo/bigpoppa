import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import avatars from "../assets/avatars.js"
import Classroom from "../components/Classroom.js"
import Teacher from "../components/Teacher.js"
import { getClassroom } from "../store/actions/classroomAction"
import { getStudent } from "../store/actions/studentAction"
import { getStudentBook } from "../store/actions/studentbookAction.js"

export default function StudentPage({ classroom }) {

	const dispatch = useDispatch()
	const classRoster = useSelector((state) => state.classRoster)
	const { loading, error, classroomVal } = classRoster

	useEffect(() => {
		dispatch(getClassroom(classroom))
	}, [dispatch])

	// This code can be used to replace the following code of it.
	// const classStudents = useSelector((state) => state.classStudents)
	// const { loading, error, students } = classStudents

	// useEffect(() => {
	// 	dispatch(getClassroomStudents(classroom))
	// }, [dispatch]);

	const students = classroomVal

	const myList = useSelector((state) => state.myList)
	const { loading2, error2, studentVal } = myList

	const studentBookList = useSelector((state) => state.studentBookList)
	const { loading3, error3, studentBookVal } = studentBookList

	const [pupils, setPupils] = useState([])
	useEffect(() => {
		students.map((key, id) => {
			console.log(studentBookVal)
			dispatch(getStudent(classroom, key))
			dispatch(getStudentBook(classroom, key, 'BC001'))
		})
	}, [classroomVal])

	useEffect(() => {
		// For studentVal = {}, !!studentVal will be true.
		if (!!studentVal && studentVal.hasOwnProperty("studentId")  && pupils.length < students.length) {
			setPupils([...pupils,
			{
				key: studentVal.studentId,
				name: studentVal.studentId,
				avatar: avatars[studentVal.avatarIndex],
				speed: studentVal.speed,
				popupCount: studentBookVal ? studentBookVal.popupCount : 0,
				nowReading: studentVal.nowReading
			}]);
		}
		console.log(pupils)
	}, [studentVal.studentId])

	return (
		<div>
			<Teacher teacher={classroom} />
			<Classroom students={pupils} classId={classroom} />
		</div>
	)
}

StudentPage.getInitialProps = ({ query: { classroom } }) => {
	return { classroom }
}
