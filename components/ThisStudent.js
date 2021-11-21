import styled from "@emotion/styled"
import React from "react"
import SecondaryHeader from "../components/SecondaryHeader.js"
import StudentPageHeader from "../components/StudentPageHeader.js"
import ThisStudentLeftPart from "./ThisStudentLeftPart.js"
import ThisStudentRightPart from "./ThisStudentRightPart.js"

export default function ThisStudent(props) {
	const {
		classroom,
		studentVal,
		popupsVal,
		onSelectPopup,
		currentPages
	} = props;

	const Container = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-gap: 3rem;
		max-width: 100vw;
		margin: 2rem 0;
		@media (min-width: 900px) {
			grid-template-columns: 55% 40%;
		}
	`

	const StudentDetails = styled.div`
		padding-top: 1rem;
		padding-left: 4rem;
		padding-right: 4rem;
	`

	return (
		studentVal && <React.Fragment>
			{/* <Teacher teacher={classroom} /> */}
			<StudentPageHeader selectedClass={classroom} />
			<StudentDetails>
				<SecondaryHeader><span>Students Details</span></SecondaryHeader>
				<Container>
					<ThisStudentLeftPart
						classroom={classroom}
						studentVal={studentVal}
						popupsVal={popupsVal}
						onSelectPopup={onSelectPopup}
						currentPages={currentPages} />
					<ThisStudentRightPart
						studentVal={studentVal}
						popupsVal={popupsVal}
					/>
				</Container>
			</StudentDetails>
		</React.Fragment>
	)
}