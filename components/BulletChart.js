import { ClassNames } from "@emotion/react"
import styled from "@emotion/styled"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import bullet from "highcharts/modules/bullet.js"
import React, { useState } from "react"
import ReactTooltip from "react-tooltip"
import Tooltip from "./Tooltip"

export default function BulletChart(props) {
	bullet(Highcharts)

	const [val, setVal] = useState(props.val)
	const [title, setTitle] = useState(props.title)
	const Bullet = styled.div`
		pointer-events: none;
		display: grid;
		grid-template-columns: 92% 8%;
		align-items: center;
		height: 2.5rem;
    	align-content: center;
		margin-left: -0.6rem; // to compensate Highchart margin
	`
	const Container = styled.div`
		display: grid;
		grid-template-columns: 90% 10%;
		align-items: center;
	`
	const Value = styled.div`
		display: flex;
		justify-content: flex-end;
		span {
			font-size: 16px;
			color: #122433;
		}
	`
	const [options, setOptions] = useState({
		chart: {
			// marginTop: props.sm ? 22 : null,
			// marginBottom: props.sm ? 8 : null,
			inverted: true,
			type: "bar",
			styledMode: false,
			height: 60,
			// width: props.sm ? 220 : null,
			backgroundColor: "transparent",
			margin: 5,
			padding: 0,
			events: {
				load: function (e) {
					// prevent redrawing the chart.
					e.preventDefault();
				}
			}
		},
		title: {
			text: title,
			align: "left",
			style: {
				fontSize: 12
			},
		},
		credits: {
			enabled: false,
		},
		tooltip: {
			enabled: false,
		},
		height: 1,
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: false
				},
				grouping: false
			},
			series: {
				borderRadius: 8,
				lineWidth: 8,
				pointPadding: 0,
				pointWidth: 10,
				borderWidth: 0,
				color: {
					linearGradient: {
						x1: 0,
						x2: 0,
						y1: 0,
						y2: 1
					},
					stops: [
						[0, props.colorLt],
				        [1, props.colorDk]
					]
				},
				marginTop: 0,
				marginBottom: 0,
				targetOptions: {
					width: 10,
				}
			}
		},
		legend: {
			enabled: false,
		},
		xAxis: {
			lineWidth: 0,
			minorGridLineWidth: 0,
			lineColor: 'transparent',
			labels: {
				enabled: false
			},
			minorTickLength: 0,
			tickLength: 0
		},
		yAxis: {
			height: 8,
			max: props.max,
			visible: true,
			gridLineWidth: 0,
			title: "Bullet",
			labels: {
				style: {
					display: "none"
				},
			},
		},
		series: [
			{
				animation: false,
				targetOptions: {
					width: 10,
				},
				data: [
					props.max
				],
				color: '#E6E6E6'
			},
			{
				targetOptions: {
					width: 20,
				},
				data: [{
					y: (val)
				}]
			},
		]
	})

	return (
		<ClassNames>
			{({ css, cx }) => (
				<Bullet>
					<Container>
						<HighchartsReact
							highcharts={Highcharts}
							options={options}
							containerProps={{
								className: css({
									height: "100%",
									width: "100%"
								})
							}}
						/>
						{props.showToolTip ?
							(
								<Tooltip
									id={"unit"}
									text={props.tooltipText}
									radius={15}
									fontSize={12}
								/>
							) : <span></span>
						}
					</Container>
					<Value><span>{Math.round(val)}</span></Value>
				</Bullet>
			)}
		</ClassNames>
	)
}