import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import "highcharts/modules/timeline"
import styles from "../styles/Home.module.css"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

export default function BookTimeline(props) {

	const Chapters = styled.div`
		img {
			width: 12px;
		}
	`
	const [thisPopup, selectPopup] = useState()

	const lastpopup = props.last
	console.log(lastpopup)
	const currentPages = props.pages

	const bookmarks = []
	const progress = []

	if (props.popups && lastpopup) {
		Object.keys(props.popups).map((key, id) => {
			var page = props.popups[key] ? props.popups[key].page : 1
			let interactive = !props.popups[key]
				? ``
				: props.popups[key]["popup type"] == "interactive"
				? true
				: false
			bookmarks.push({ key: key, x: page, y: 0, interactive: interactive })
			bookmarks.push({ x: 0, y: 0 })
			bookmarks.unshift({ x: currentPages, y: 0 })
		})

		Object.keys(bookmarks).map((key, id) => {
			if (bookmarks[key].x <= props.popups[lastpopup].page) {
				progress.push(bookmarks[key])
			}
		})
	}

	const options = {
		title: {
			text: "",
		},
		credits: {
			enabled: false,
		},
		legend: {
			enabled: false,
		},
		chart: {
			spacingTop: 0,
			spacingBottom: 50,
			spacingLeft: 10,
			spacingRight: 10,
			height: 140,
		},
		xAxis: {
			visible: false,
			min: 0,
			max: currentPages,
			opposite: true,
		},
		yAxis: {
			visible: false,
		},
		tooltip: {
			enabled: false,
		},
		series: [
			{
				animation: false,
				data: bookmarks,
				type: "line",
				lineWidth: "4px",
				color: "lightgrey",
				marker: {
					enabled: true,
          symbol: 'diamond',
				},
				states: {
					hover: {
						enabled: false,
					},
					inactive: {
						enabled: false,
					},
				},
				dataLabels: {
					y: 35,
					enabled: true,
					useHTML: true,
					allowOverlap: true,
					formatter() {
						var thisClass = ""
						if (this.point.x != 0 && this.point.x != currentPages) {
							if (this.point.x > props.popups[lastpopup].page) {
								thisClass = styles.desaturate
							}
							if (this.point.interactive) {
								return (
									'<div class="' +
									thisClass +
									'"><img src="/img/interactive.svg"></img></div>'
								)
							} else {
								return (
									'<div class="' +
									thisClass +
									'"><img src="/img/bulb.svg"></img></div>'
								)
							}
						}
					},
				},
				allowPointSelect: true,
				cursor: "pointer",
				point: {
					events: {
					    select: function(events){
					      events.preventDefault()
					      console.log(this)
					      props.parentCallback(this.options.key)
					    }
					}
				},
			},
			{
				cursor: "pointer",
				allowPointSelect: true,
				point: {
					events: {
						select: function (events) {
							events.preventDefault()
							props.parentCallback(this.options.key)
						},
					},
				},
				states: {
					hover: {
						enabled: false,
					},
					inactive: {
						enabled: false,
					},
				},
				data: progress,
				type: "line",
				lineWidth: "4px",
				color: "#77C294",
        marker: {
            symbol: 'diamond'
        },
			},
		],
	}

	return (
		<Chapters>
		<div> {props.last}</div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</Chapters>
	)
}
//
// BookTimeline.getInitialProps = ({query: { popups } }) =>{
//   return { popups }
// }
