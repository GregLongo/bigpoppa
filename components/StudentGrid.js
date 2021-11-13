import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"
import { useRouter } from "next/router"
import Student from "./Student_Functional.js"
import styled from "@emotion/styled"

import { getStudent } from "../store/actions/studentAction.js"
import { getStudentBook } from "../store/actions/studentbookAction.js"

export default function StudentGrid({ students, classroom }) {
	const StudentGrid = styled.ul`
		display: grid;
		grid-template-columns: 100%;
		grid-gap: 1rem;
		@media (min-width: 880px) {
			grid-template-columns: 50% 50%;
		}
	`

	return (
		<StudentGrid>
			{students.map((key, id) => {
				return (
					<Link
						key={id}
						href={{
							pathname: "/ThisStudent",
							query: { student: [key.key], classroom: classroom },
						}}
					>
						<a>
							<Student
								avatar={key.avatar}
								popupCount={key.popupCount}
								student={key.name}
								speed={key.speed}
							/>
						</a>
					</Link>
				)
			})}
		</StudentGrid>
	)
}
