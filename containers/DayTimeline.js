import React from "react";
import { connect } from "react-redux";
import DayTimelineComponent from '../components/DayTimeline.js';

let counter = 0;
const CATEGORY_COLORS = {
	"theme": "#E37F4A",
	"plot": "#B93454",
	"characters": "#FECE80",
	"setting": "#32658C",
	"conflict / problem solution": "#9F3801",
	"text evidence / inference": "#7E001E",
	"compare / contrast": "#77C294",
	"sequence / summary": "#0F314D",
	"challenge": "#7897AF",
	"vocabulary": "#02A87D",
	"author / illustrator": "#73C6B0",
	"structure - part / whole": "#B7D3E8",
	"point of view": "#E995A9",
	"impact of illustrationas": "#CB9D85",
	"connection with source materials": "#0F314D"
}

class DayTimeline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dates: [],
			selectDate: null,
			timestamps: [],
			options: null
		}
		this.getReadableDate = this.getReadableDate.bind(this);
		this.setSelectDate = this.setSelectDate.bind(this);
	}

	componentDidMount() {
		if (this.props.events != undefined && this.props.popups != undefined) {
			const events = this.props.events;
			const dates = [];
			Object.keys(events).map((key, id) => {
				var date = new Date(events[key].timestamp)
				var dateTrunc = Date.parse(
					date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
				)
				if (!dates.includes(dateTrunc)) {
					dates.push(dateTrunc)
				}
			});

			// update the component state
			this.setState({
				dates,
				selectDate: dates.length > 0 ? this.getReadableDate(new Date(dates[0])) : null /* default select date */
			})
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.selectDate && prevState.selectDate != this.state.selectDate) {
			const events = this.props.events;
			const timestamps = [];
			const parentCallback = this.props.parentCallback;

			Object.keys(events).map((key, id) => {
				if (events[key].action == "PopupShown") {
					var stamp = new Date(events[key].timestamp)
					var stampTrunc = this.getReadableDate(stamp)

					let category = !this.props.popups[events[key].popupId]
						? ``
						: this.props.popups[events[key].popupId].primary[0]

					let isMore = !this.props.popups[events[key].popupId] || !this.props.popups[events[key].popupId].primary[1] ? `` : '...';

					let color = CATEGORY_COLORS.hasOwnProperty(category) ? CATEGORY_COLORS[category] : "#0F314D";

					let interactive = !this.props.popups[events[key].popupId]
						? ``
						: this.props.popups[events[key].popupId]["popup type"] == "interactive"
							? true
							: false
					if (stampTrunc == this.state.selectDate) {
						timestamps.push({
							x: stamp,
							y: 0,
							interactive: interactive,
							cat: category,
							isMore: isMore,
							lp: events[key].popupId,
							color: color
						})
					}
				}
			});

			let options = {
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
										this.point.cat + this.isMore +
										"</span></div>"
									)
								} else {
									return (
										'<div class="pop"><img src="/img/bulb.svg"><span style="background-color:' +
										this.point.color
										+ '" class="cat">' +
										this.point.cat + this.point.isMore +
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
								select: function (e) {
									e.preventDefault();
									const poppers = this.lp;
									parentCallback(poppers);
								}
							},
						},
						data: timestamps,
					},
				],
			};
			this.setState({
				options
			});
		}
	}

	setSelectDate(myDate) {
		if (!myDate) {
			return;
		}
		this.setState({
			selectDate: this.getReadableDate(myDate)
		});
	}

	getReadableDate(thisDate) {
		return (thisDate.getMonth() + 1) +
			"/" +
			thisDate.getDate() +
			"/" +
			thisDate.getFullYear()
	}


	render() {
		return (
			this.state.options && <DayTimelineComponent
				dates={this.state.dates}
				onSelectDate={this.setSelectDate}
				onGetReadableDate={this.getReadableDate}
				options={this.state.options}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	isLoading: state.timestampsList.isLoading,
	error: state.timestampsList.error,
});

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DayTimeline);