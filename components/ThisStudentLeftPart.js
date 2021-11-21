import styled from "@emotion/styled"
import React from "react"
import avatars from "../assets/avatars.js"
import TimelineProvider from "../containers/TimelineProvider"
import Score from "./Score.js"

export default function ThisStudentLeftPart(props) {
	const {
		classroom,
		studentVal,
		popupsVal,
		onSelectPopup,
		currentPages
	} = props;

	const LeftContainer = styled.div`
		background: white;
		padding: 1rem;
		border-radius: 10px;
	`

	const Name = styled.div`
		font-size: 2em;
		margin-bottom: 1rem;
	`

	const Reading = styled.div`
		font-size: 1.5em;
		margin-bottom: 1rem;
	`

	const Marquis = styled.div`

	`

	const Info = styled.div`
		display: grid;
		grid-template-columns: 100%;
		align-items: center;
		@media (min-width: 768px) {
			grid-template-columns: 25% 75%;
		}
	`
	const ScoreList = styled.div`
		display: flex;
		flex-wrap: wrap;
	`

	return (<LeftContainer>
		<Info>
			<div>
				<img src={avatars[studentVal.avatarIndex - 1]} />
			</div>
			<Marquis>
				<Name>{studentVal.studentId}</Name>
				{studentVal.lastEvent ? (
					<Reading>Now Reading: {studentVal.nowReading}</Reading>
				) : null}
				<ScoreList>
					<Score
						src={'img/book.svg'}
						value={1}
						text={"Books"}
					/>
					<Score
						src={'img/lightbulb.svg'}
						value={studentVal.popupCount}
						text={"Popups Played"}
					/>
					<Score
						src={'img/question_mark.svg'}
						value={11}
						text={"Interactive Popups"}
					/>
				</ScoreList>
			</Marquis>
		</Info>
		<TimelineProvider
			classroom={classroom}
			student={studentVal}
			parentCallback={onSelectPopup}
			popupsVal={popupsVal}
			currentPages={currentPages}
		>
		</TimelineProvider>
	</LeftContainer>
	)
}