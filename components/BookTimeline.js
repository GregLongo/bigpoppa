import styled from "@emotion/styled"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import "highcharts/modules/timeline"
import React from "react"

export default function BookTimeline(props) {

	const Chapters = styled.div`
		img {
			width: 12px;
		}
	`
	
	return (
		<Chapters>
			<div> {props.last}</div>
			<HighchartsReact highcharts={Highcharts} options={props.options} />
		</Chapters>
	)
}
