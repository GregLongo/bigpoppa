import styled from "@emotion/styled";
import React from "react";
import StudentPopupInspector from "../containers/StudentPopupInspector.js";
import BulletChart from "./BulletChart.js";
import PopupInspector from "./PopupInspector.js";

export default function ThisStudentRightPart(props) {
	const {
		studentVal,
		popupsVal
	} = props;

	const RightContainer = styled.div`
		background: white;
		padding: 3rem 1rem;
		border-radius: 10px;
	`

	return (
		<RightContainer>
			<div>
				{studentVal.speed >= 0 && <BulletChart
					val={(60 * 60) / parseFloat(studentVal.speed)}
					max={60}
					title={"Avg Speed (Minutes per pages)"}
					colorLt={"#02A87D"}
					colorDk={"#BEF4E6"}
					/>}
				{studentVal.score >= 0 && <BulletChart
					val={parseFloat(studentVal.score)}
					max={100}
					title={"Overall Comprehension"}
					colorLt={"#EB720B"}
					colorDk={"#F4D5BB"}
					/>}
			</div>
			<StudentPopupInspector popups={popupsVal} />
		</RightContainer>
	)
}
