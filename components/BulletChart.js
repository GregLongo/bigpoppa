import { ClassNames } from "@emotion/react"
import styled from "@emotion/styled"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import bullet from "highcharts/modules/bullet.js"
import React, { useState } from "react"

export default function BulletChart(props) {
	bullet(Highcharts)

	const [val, setVal] = useState(props.val)
	const [title, setTitle] = useState(props.title)
	const Bullet = styled.div`
		pointer-events: none;
		display: grid;
		grid-template-columns: 90% 10%;
		align-items: flex-end;
		padding-right: 0.5rem;
		height: 2.5rem;
    	align-content: center;
		span {
			font-size: 16px;
			color: #122433;
		}
		margin-left: -0.6rem; // to compensate Highchart margin
	`
	const Value = styled.div`
		display: flex;
		justify-content: flex-end;
	`
	const [options, setOptions] = useState({
		chart: {
			marginTop: props.sm ? 22 : null,
			marginBottom: props.sm ? 8 : 45,
			inverted: true,
			type: "bar",
			styledMode: false,
			height: props.sm ? 48 :95,
			width: props.sm ? 220 : null,
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
				// color: props.color,
				color: {
				    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
				    stops: [
				        [0, props.colorLt],
				        [1, props.colorDk]
				    ]
				},
				marginTop: 0,
				marginBottom: 0,
				targetOptions: {
					width: 10,
				},
			},
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
					<Value><span>{Math.round(val)}</span></Value>
				</Bullet>
			)}
		</ClassNames>
	)
}
