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
		padding: 0.5rem 1rem;
		background-color: #fff;
		align-items: center;
		border-radius: 10px;
		&:hover {
			outline: 2px solid #ccc;
		}
		@media (min-width: 768px) {
			width: 380px;
		}
	`

	const Avatar = styled.img`
		height: 50%;
		width: auto;
		justify-content: center;
		display: flex;
		max-height: 50%;
	`

	const NameScore = styled.div`
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 0.5rem 0 0.5rem;
	`

	return (
		<Student>
			<Avatar src={props.avatar} />
			<div>
				<NameScore>
					<span>{props.student}</span>
					<Scores popups={props.popupCount} interactive={11} something={3} />
				</NameScore>
				{props.speed > 0 ? (
					<BulletChart
						val={parseFloat(props.speed)}
						max={2000}
						title={"Avg Speed"}
						color={"#77C294"}
					/>
				) : null}
			</div>
		</Student>
	)
}
