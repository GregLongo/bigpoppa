import React from "react"
import styled from "@emotion/styled"

export default function StudentPageHeader({ selectedClass }) {
	const StudentPageHeader = styled.div`
		font-family: system-ui;
    	font-size: 30px;
    	font-weight: 200;
		color: white;
		border-bottom: solid white 1px;
		padding-top: 2rem;
		padding-left: 3rem;
		padding-right: 3rem;
		padding-bottom: 0.5rem;
		display: flex;
    	justify-content: space-between;
		span {
			padding: 2px;
		}
		.student-class {

		}
	`
	return <StudentPageHeader>
		<div>
			<span>LP-Bookspace Teacher Dashboard</span>
		</div>
		<div>
			<span className={"student-class"}>{selectedClass}</span>
		</div>
	</StudentPageHeader>;
}
