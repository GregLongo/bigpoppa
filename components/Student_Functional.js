import styled from "@emotion/styled"
import React from "react"
import BulletChart from "../components/BulletChart.js"
import Score from "./Score.js"

export default function Student(props) {

	const Student = styled.div`
		display: grid;
		grid-template-columns: 30% 70%;
		height: 130px;
		background-color: #fff;
		border-radius: 5px;
		&:hover {
			outline: 2px solid #ccc;
		}
		@media (min-width: 768px) {
			width: 380px;
		}
		padding: 0.5rem 0.5rem 0.5rem 0rem;
	`

	const StudentName = styled.div`
		display: flex;
    	align-items: center;
	`

	const Avatar = styled.div`
		justify-content: center;
		display: flex;
		align-items: center;
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
					<StudentName>
						<span>{props.studentId}</span>
					</StudentName>
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
				{props.speed >= 0 ? (
					<BulletChart
						val={(60 * 60) / parseFloat(props.speed)}
						max={60}
						title={"Avg Speed"}
						colorLt={"#02A87D"}
						colorDk={"#BEF4E6"}
					/>
				) : null}
				{props.score >= 0 ? (
					<BulletChart
						val={parseFloat(props.score)}
						max={100}
						title={"Overall Comprehension"}
						colorLt={"#EB720B"}
						colorDk={"#F4D5BB"}
					/>
				) : null}
			</StudentInfo>
		</Student>
	)
}
