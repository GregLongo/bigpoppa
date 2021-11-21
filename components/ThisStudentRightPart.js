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
				{studentVal.speed > 0 && <BulletChart
					val={Math.round(Number(studentVal.speed) / 60)}
					max={10}
					title={"Avg Speed (Minutes per pages)"}
					color={"#02A87D"}
				/>}
			</div>
			<StudentPopupInspector popups={popupsVal} />
		</RightContainer>
	)
}