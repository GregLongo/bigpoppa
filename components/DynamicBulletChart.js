import { ClassNames } from "@emotion/react"
import styled from "@emotion/styled"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import React, { useState } from "react"

export default function DynamicBulletChart(props) {

	const [val, setVal] = useState(props.val)
	const [title, setTitle] = useState(props.title)

	const ChartContainer = styled.div`
	pointer-events: none;
		display: grid;
		grid-template-columns: 100% 100%;
		@media (min-width: 880px) {
			grid-template-columns: 85% 15%;
		}
	`
	const Bullet = styled.div`
		height: ${props => props.height};
		align-content: flex-start;
		align-items: flex-start;
	`
	const Value = styled.div`
		display: flex;
		align-items: center;
		span {
			font-size: ${props => props.fontSize + "px"};
			color: ${props => props.color};
		}
		justify-content: end;
	`

	let stops = [
		[0, props.chartColor]
	];
	if (props.showGradient) {
		stops.push([1, "#FFFFFF"])
	}
	const [options, setOptions] = useState({
		chart: {
			margin: 'auto',
			inverted: true,
			type: "bar",
			styledMode: false,
			height: 40 /** heigh 2.5rem */ + 10 /** space for title */ + props.width,
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
				fontSize: props.titleFontSize || 15,
				paddingBottom: 4,
				color: props.titleColor || "#122433",
				// Shorten text using css.
				whiteSpace: "nowrap",
				overflow: "hidden",
				textOverflow: "ellipsis"
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
				pointWidth: props.width || 10,
				borderWidth: 0,
				color: {
					linearGradient: {
						x1: 0,
						x2: 0,
						y1: 0,
						y2: 1
					},
					stops: stops
				},
				marginTop: 0,
				marginBottom: 0,
				targetOptions: {
					width: 0,
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
			// height: 6,

			max: props.max,
			visible: true,
			gridLineWidth: 0,
			// plotBands: [
			//   {
			//     from: 0,
			//     to: 150,
			//     color: "#666"
			//   },
			//   {
			//     from: 150,
			//     to: 225,
			//     color: "#999"
			//   },
			//   {
			//     from: 225,
			//     to: 9e9,
			//     color: "#bbb"
			//   }
			// ],
			title: "jdjjsjkjkdj",
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
					width: 20,
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
				<ChartContainer>
					{/* <Bullet height={new String((props.width + 55) * 0.063) + "rem"}> */}
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

					</Bullet>
					<Value fontSize={props.fontSize || 25} color={props.color || "#6E7880"}><span>{Math.round(val)}</span></Value>
				</ChartContainer>
			)}
		</ClassNames>
	)
}
