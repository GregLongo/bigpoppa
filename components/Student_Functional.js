import styled from "@emotion/styled";
import React from "react";
import BulletChart from "../components/BulletChart.js";
import Score from "./Score.js";

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
		margin: 0 0.4rem 0 0;
	`

	const NameScore = styled.div`
		display: flex;
		justify-content: space-between;
	`

	const ScoreList = styled.div`
		display: flex;
		justify-content: flex-end;
	`

	const ChartContainer = styled.div`
		margin-top: 0.5rem;
	`

	const WhiteSpace = styled.span`
		margin: 0.2rem;
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
						<WhiteSpace />
						<Score
							src={'img/lightbulb.svg'}
							value={props.popupCount}
						/>
						<WhiteSpace />
						<Score
							src={'img/question_mark.svg'}
							value={props.interactivePopupCount || 0}
						/>
					</ScoreList>
				</NameScore>
				<ChartContainer>
					{props.speed >= 0 ? (
						<BulletChart
							val={props.speed == 0 ? 0 : (3600) / parseFloat(props.speed)} /** This is temparary. Later server will send the data in required format */
							max={60}
							title={"Reading Speed"}
							showToolTip={true}
							tooltipText={"pages per hour"}
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
				</ChartContainer>
			</StudentInfo>
		</Student>
	)
}
