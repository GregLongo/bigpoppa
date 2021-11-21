import styled from "@emotion/styled"
import Link from "next/link"
import React from "react"
import { useDispatch } from "react-redux"
import avatars from "../assets/avatars.js"
import { selectStudent } from "../store/actions/thisStudentAction.js"
import NoData from "./NoData.js"
import Student from "./Student_Functional.js"


export default function StudentGrid({ students, classroom }) {
	const StudentGrid = styled.div`
		display: grid;
		grid-column-gap: .5rem;
		grid-row-gap: 1rem;
		// 380px same as provided at the Student component.
		grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
		margin-top: 3rem;
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
								avatar={avatars[student.avatarIndex - 1]}
								{...student}
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
