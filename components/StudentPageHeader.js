import React from "react"
import styled from "@emotion/styled"

export default function StudentPageHeader({ selectedClass }) {
	const HeaderSpace = styled.div`
		height: 3rem;
		@media (min-width: 768px) {
			display: none;
		}
	`
	const StudentPageHeader = styled.div`
		color: white;
		border-bottom: solid white 1px;
		padding-top: 2rem;
		padding-left: 4rem;
		padding-right: 4rem;
		padding-bottom: 0.2rem;
		display: flex;
    	justify-content: space-between;
		font-size: 30px;
    	font-weight: 200;
		.header {
			font-family: 'BauhausStd-Light';
		}
		@media (max-width: 768px) {
			display: none;
		}
	`
	const HeaderRightPart = styled.div`
		display: flex;
		div {
			cursor: pointer;
		}
	`

	const RightPartHolder = styled.div`
		display: flex;
		&.space-after {
			margin-right: 3rem;
		}
		div {
			display: flex;
			align-content: center;
			padding-right: 1rem;
		}
	`

	return (<React.Fragment>
		<HeaderSpace />
		<StudentPageHeader>
			<div className={"header"}>
				<span>LP-Bookspace Teacher Dashboard</span>
			</div>
			<HeaderRightPart>
				<RightPartHolder className={"space-after"}><div>{selectedClass}</div><div><img src={"img/arrow_down.svg"} /></div></RightPartHolder>
				<RightPartHolder><div>{"Romeo and Juliet"}</div><div><img src={"img/arrow_down.svg"} /></div></RightPartHolder>
			</HeaderRightPart>
		</StudentPageHeader>
	</React.Fragment>);
}
