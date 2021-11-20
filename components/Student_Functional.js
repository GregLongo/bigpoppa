import styled from "@emotion/styled"
import React from "react"
import BulletChart from "../components/BulletChart.js"
import Scores from "../components/Scores.js"

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
			width: 400px;
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

	return (
		<Student>
			<Avatar >
				<img src={props.avatar} />
			</Avatar>
			<StudentInfo>
				<NameScore>
					<span>{props.studentId}</span>
					<Scores popups={props.popupCount} interactive={11} something={3} />
				</NameScore>
				{props.speed > 0 ? (
					<BulletChart
						val={parseFloat(props.speed) / 60}
						max={10}
						title={"Avg Speed"}
						color={"#26ab24"}
					/>
				) : null}
				{props.score > 0 ? (
					<BulletChart
						val={parseFloat(props.score)}
						max={100}
						title={"Avg Speed"}
						color={"#ed601a"}
					/>
				) : null}
			</StudentInfo>
		</Student>
	)
}
