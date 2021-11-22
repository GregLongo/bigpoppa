import styled from "@emotion/styled"
import React from "react"
import ClassOverview from "../components/ClassOverview.js"
import StudentPageHeader from "../components/StudentPageHeader.js"

export default function ClassPage({ classroom }) {
	const StudentPageComponent = styled.div`
		height: 100%;
		background-color: #48A88F;
	`

	return (
		<StudentPageComponent>
			<StudentPageHeader selectedClass={classroom} />
			<ClassOverview classroom={classroom} />
		</StudentPageComponent>
	)
}

ClassPage.getInitialProps = ({ query: { classroom } }) => {
	return { classroom }
}
