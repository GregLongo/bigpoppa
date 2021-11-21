/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { faList, faTh } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import StudentGrid from "./StudentGrid.js"
import StudentList from "./StudentList.js"

export default function Classroom({ students, classId }) {
	const ClassroomComponent = styled.div`
		padding-top: 2rem;
		padding-left: 4rem;
		padding-right: 4rem;
	`;

	const Heading = styled.div`
		font-size: 44px;
		font-weight: 500;
		color: white;
	`

	const ViewButtonContainer = styled.div`
		display: flex;
		justify-content: flex-end;
	`

	const ViewButton = styled.button`
		cursor: pointer;
		margin-left: 1rem;
		background-color: transparent;
		border: none;
		font-size: 30px;
		font-weight: 300;
		color: white;
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
		<div>
			<Heading><span>Students Overview</span></Heading>
			<ViewButtonContainer>
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
			</ViewButtonContainer>
		</div>
		{isGrid ? (
			<StudentGrid students={students} classroom={classId} />
		) : (
			<StudentList students={students} classroom={classId} />
		)}
	</ClassroomComponent>
	);
}
