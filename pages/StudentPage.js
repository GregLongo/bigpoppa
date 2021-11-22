import styled from "@emotion/styled"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Classroom from "../components/Classroom.js"
import NoData from "../components/NoData.js"
import StudentPageHeader from "../components/StudentPageHeader.js"
import { clearClassroomStudents, getClassroomStudents } from '../store/actions/classStudentsAction.js'
export default function StudentPage(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getClassroomStudents(props.classroom))

		return ()=>{
			dispatch(clearClassroomStudents(props.classroom))
		}
	}, [dispatch]);

	const classStudents = useSelector((state) => state.classStudents)
	let { loading, error, students } = classStudents;

	const StudentPageComponent = styled.div`
	`

	const ClassroomComponent = styled.div`
		padding-top: 2rem;
		padding-left: 4rem;
		padding-right: 4rem;
	`;

	return (
		<StudentPageComponent>
			{/* <Teacher teacher={classroom} /> */}
			<StudentPageHeader selectedClass={props.classroom} />
			<ClassroomComponent>
				{
					loading ? (
						<NoData label={`Fetching the class ${props.classroom}`}></NoData>
					) : <Classroom students={students} classId={props.classroom} />
				}
			</ClassroomComponent>
		</StudentPageComponent>
	)
}

StudentPage.getInitialProps = ({ query: { classroom } }) => {
	return { classroom }
}
