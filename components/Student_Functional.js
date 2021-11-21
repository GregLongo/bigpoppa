import styled from "@emotion/styled"
import React from "react"
import BulletChart from "../components/BulletChart.js"
import Score from "./Score.js"

export default function Student(props) {

	const Student = styled.div`
		display: grid;
		grid-template-columns: 30% 70%;
		height: 140px;
		width: 90%;
		background-color: #fff;
		align-items: center;
		border-radius: 5px;
		&:hover {
			outline: 2px solid #ccc;
		}
		@media (min-width: 768px) {
			width: 380px;
		}
		padding: 0.5rem 0.5rem 0.5rem 0rem;
	`

	const Avatar = styled.div`
		justify-content: center;
		display: flex;
	`

	const StudentInfo = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	`

	const NameScore = styled.div`
		display: flex;
		justify-content: space-between;
	`

	const ScoreList = styled.div`
		display: flex;
		justify-content: space-between;
	`

	return (
		<Student>
			<Avatar >
				<img src={props.avatar} />
			</Avatar>
			<StudentInfo>
				<NameScore>
					<div>
						<span>{props.studentId}</span>
					</div>
					<ScoreList>
						<Score
							src={'img/book.svg'}
							value={1}
						/>
						<Score
							src={'img/lightbulb.svg'}
							value={props.popupCount}
						/>
						<Score
							src={'img/question_mark.svg'}
							value={11}
						/>
					</ScoreList>
				</NameScore>
				{props.speed > 0 ? (
					<BulletChart
						val={parseFloat(props.speed) / 60}
						max={10}
						title={"Avg Speed"}
						color={"#02A87D"}
					/>
				) : null}
				{props.score > 0 ? (
					<BulletChart
						val={parseFloat(props.score)}
						max={100}
						title={"Overall Comprehension"}
						color={"#EB720B"}
					/>
				) : null}
			</StudentInfo>
		</Student>
	)
}
