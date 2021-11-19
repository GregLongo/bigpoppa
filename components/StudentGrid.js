import styled from "@emotion/styled"
import Link from "next/link"
import React from "react"
import { useDispatch } from "react-redux"
import avatars from "../assets/avatars.js"
import { selectStudent } from "../store/actions/thisStudentAction.js"
import NoData from "./NoData.js"
import Student from "./Student_Functional.js"


export default function StudentGrid({ students, classroom }) {
	const StudentGrid = styled.ul`
		display: grid;
		grid-template-columns: 100%;
		grid-gap: 1rem;
		@media (min-width: 880px) {
			grid-template-columns: 50% 50%;
		}
	`

	const dispatch = useDispatch();

	console.log("student", students)
	return (
		<StudentGrid>
			{students.map((student, id) => {
				return (
					<Link
						key={id}
						href={{
							pathname: "/ThisStudent",
							query: { student: [student.studentId], classroom: classroom },
						}}
					>
						<a onClick={() => {
							dispatch(selectStudent(student))
						}}>
							<Student
								avatar={avatars[student.avatarIndex]}
								popupCount={student.popupCount}
								student={student.studentId}
								speed={student.speed}
							/>
						</a>
					</Link>
				)
			})}
			{
				(!students || students.length <= 0) && <NoData label={"No student records found!"}></NoData>
			}
		</StudentGrid>
	)
}
