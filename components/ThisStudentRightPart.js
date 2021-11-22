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
					color={"#02A87D"}
				/>}
				{studentVal.score >= 0 && <BulletChart
					val={parseFloat(studentVal.score)}
					max={100}
					title={"Overall Comprehension"}
					color={"#E37F4A"}
				/>}
			</div>
			<StudentPopupInspector popups={popupsVal} />
		</RightContainer>
	)
}