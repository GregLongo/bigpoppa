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
					val={studentVal.speed == 0 ? 0 : (3600) / parseFloat(studentVal.speed)} /** This is temparary. Later server will send the data in required format */
					max={60}
					title={"Reading Speed (pages per hour)"}
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
