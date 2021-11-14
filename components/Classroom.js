import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { faList, faTh } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import StudentGrid from "./StudentGrid.js"
import StudentList from "./StudentList.js"

export default function Classroom({ students, classId }) {
	const ClassroomComponent = styled.div`
	`;

	const Heading = styled.div`
		padding-top: 2rem;
		padding-left: 3rem;
		padding-right: 3rem;
		display: flex;
		justify-content: space-between;
		font-size: 24px;
	`
	const ViewButton = styled.button`
		cursor: pointer;
		margin-left: 1rem;
		background-color: transparent;
		border: none;
		font-size: 24px;
	`
	const listButton = ({ isGrid }) => css`
		opacity: 0.3;
		&:hover {
			opacity: 0.4;
		}
		${isGrid === false &&
		`
      opacity: 1 !important
    `}
	`
	const gridButton = ({ isGrid }) => css`
		opacity: 0.3;
		&:hover {
			opacity: 0.4;
		}
		${isGrid === true &&
		`
      opacity: 1 !important
    `}
	`
	const [isGrid, setGrid] = useState(true)

	return (<ClassroomComponent>
		<Heading>
			<span>Students</span>
			<span>
				<ViewButton
					css={listButton({ isGrid })}
					onClick={() => {
						setGrid(false)
					}}
				>
					<FontAwesomeIcon icon={faList} />
				</ViewButton>
				<ViewButton
					css={gridButton({ isGrid })}
					onClick={() => {
						setGrid(true)
					}}
				>
					<FontAwesomeIcon icon={faTh} />
				</ViewButton>
			</span>
		</Heading>
		{isGrid ? (
			<StudentGrid students={students} classroom={classId} />
		) : (
			<StudentList students={students} classroom={classId} />
		)}
	</ClassroomComponent>
	);
}
