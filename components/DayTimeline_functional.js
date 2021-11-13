import React, { Component, useState } from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
const timestamps = []
import styled from "@emotion/styled"
import { css } from "@emotion/react"

export default function DayTimeline(props) {
  
	const DateButton = styled.button`
		background: transparent;
		border: none;
		border-top: 3px solid lightblue;
		padding-top: 0.5rem;
		margin-right: 0.5rem;
		cursor: pointer;
		&:hover {
			border-top: 3px solid teal;
		}
	`
	const DateMarquis = styled.div`
		padding: 2rem 0.5rem 0rem;
		font-size: 24px;
	`
	const ChartContainer = styled.div`
		.cat {
			background: #b4d260;
			padding: 0.2rem 0.4rem;
			border-radius: 16px;
			color: white;
		}
		.pop {
			display: flex;
			flex-direction: column;
			align-items: center;
			cursor: pointer;
		}
		img {
			width: 20px;
			height: 20px;
			margin: 0.5rem;
		}
	`
	const events = props.events

	//Just Date
	const dates = []
	const timestamps = []
	const latest = new Date(dates[dates.length - 1])
	const lastdate =
		latest.getFullYear() +
		"/" +
		(latest.getMonth() + 1) +
		"/" +
		latest.getDate()

	const [selectDate, setDate] = useState(lastdate)

	if (props.events != undefined && props.popups != undefined) {
		Object.keys(events).map((key, id) => {
			var date = new Date(events[key].timestamp)
			var dateTrunc = Date.parse(
				date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
			)
			if (!dates.includes(dateTrunc)) {
				dates.push(dateTrunc)
			}
		})

		Object.keys(events).map((key, id) => {
			if (events[key].action == "PopupShown") {
				var stamp = new Date(events[key].timestamp)
				var stampTrunc =
					stamp.getFullYear() +
					"/" +
					(stamp.getMonth() + 1) +
					"/" +
					stamp.getDate()

				let category = !props.popups[events[key].popupId]
					? ``
					: props.popups[events[key].popupId].primary

				let interactive = !props.popups[events[key].popupId]
					? ``
					: props.popups[events[key].popupId]["popup type"] == "interactive"
					? true
					: false
				if (stampTrunc == selectDate) {
					timestamps.push({
						x: stamp,
						y: 0,
						interactive: interactive,
						cat: category,
						lp: events[key].popupId,
					})
				}
			}
		})
	}

	const options = {
		title: {
			text: "",
		},
		xAxis: {
			type: "datetime",
			lineWidth: 3,
			opposite: true,
		},
		yAxis: {
			visible: false,
		},
		legend: {
			enabled: false,
		},
		credits: {
			enabled: false,
		},
		chart: {
			spacingBottom: 140,
			spacingTop: 40,
			spacingLeft: 10,
			spacingRight: 10,
			height: 220,
		},
		tooltip: {
			enabled: false,
		},
		series: [
			{
				dataLabels: {
					offset: 300,
					enabled: true,
					useHTML: true,
					allowOverlap: true,
					formatter() {
						var thisClass = ""
						if (this.point.interactive) {
							return (
								'<div class="pop"><img src="/img/interactive.svg"><span class="cat">' +
								this.point.cat +
								"</span></div>"
							)
						} else {
							return (
								'<div class="pop"><img src="/img/bulb.svg"><span class="cat">' +
								this.point.cat +
								"</span></div>"
							)
						}
					},
				},
				lineWidth: "4px",
				lineWidthPlus: "4px",
				color: "black",
				allowPointSelect: true,
				states: {
					hover: {
						enabled: false,
					},
					inactive: {
						enabled: false,
					},
				},
				point: {
					events: {
						click: function () {
							this.series.chart.update({
								tooltip: {
									enabled: false,
								},
							})
						},
						select: function (events) {
							events.preventDefault()
							const poppers = this.lp
							props.parentCallback(poppers)
						},
					},
				},
				data: timestamps,
			},
		],
	}

	return (
		<div>
			{dates.map((thisDate, index) => {
				var myDate = new Date(thisDate)

				return (
					<DateButton
						key={index}
						onClick={() => {
							setDate(
								myDate.getFullYear() +
									"/" +
									(myDate.getMonth() + 1) +
									"/" +
									myDate.getDate()
							)

							const someevent =
								Object.keys(events)[Object.keys(events).length - 1]
						}}
					>
						{myDate.getFullYear() +
							"/" +
							(myDate.getMonth() + 1) +
							"/" +
							myDate.getDate()}
					</DateButton>
				)
			})}
			<div>
				<DateMarquis>{selectDate}</DateMarquis>
				<ChartContainer>
					<HighchartsReact highcharts={Highcharts} options={options} />
				</ChartContainer>
			</div>
		</div>
	)
}
