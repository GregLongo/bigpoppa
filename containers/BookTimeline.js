import "highcharts/modules/timeline"
import React from "react"
import styles from "../styles/Home.module.css"
import BookTimelineComponent from "../components/BookTimeline"

class BookTimeline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bookmarks: [],
			progress: [],
			options: null,
			optionsChanged: false
		}
		this.setOptions = this.setOptions.bind(this);
		this.getPageTitle = this.getPageTitle.bind(this);
	}

	componentDidMount() {
		const lastpopup = this.props.last;
		const currentPages = this.props.pages;

		const bookmarks = []
		const progress = []
		this.pageTitles = {};

		if (this.props.popups && lastpopup) {
			Object.keys(this.props.popups).map((key, id) => {
				var page = this.props.popups[key] ? this.props.popups[key].page : 1
				let interactive = !this.props.popups[key]
					? ``
					: this.props.popups[key]["popup type"] == "interactive"
						? true
						: false
				bookmarks.push({ key: key, x: page, y: 0, interactive: interactive })
				bookmarks.push({ x: 0, y: 0 })
				bookmarks.unshift({ x: currentPages, y: 0 });
				let pageTitle = this.props.popups[key]['popup title'];
				if (!!pageTitle) {
					this.pageTitles[page] = pageTitle;
				}
			})

			Object.keys(bookmarks).map((key, id) => {
				if (bookmarks[key].x <= this.props.popups[lastpopup].page) {
					progress.push(bookmarks[key])
				}
			})
		}

		// Set the component state
		this.setState({
			bookmarks,
			progress
		}, () => {
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if ((this.state.bookmarks != prevState.bookmarks && this.state.bookmarks)
			|| (this.state.progress != prevState.progress && this.state.progress)
			|| (this.props.pages != prevProps.pages && this.props.pages)) {
			this.setOptions();
		}

		if (this.state.optionsChanged) {
			this.setState({
				optionsChanged: false
			})
		}
	}


	shouldComponentUpdate(newProps, newState) {
		return newState.optionsChanged ||
			newProps.last != this.props.last ||
			newState.bookmarks != this.state.bookmarks ||
			newProps.pages != this.props.pages ||
			newState.progress != this.state.progress;
	}

	setOptions() {
		const { bookmarks, progress } = this.state;
		const { popups, pages: currentPages } = this.props;
		const lastpopup = this.props.last;
		const parentCallback = this.props.parentCallback;
		const getPageTitle = this.getPageTitle;
		let plotBands = [];

		let pageNumbers = Object.keys(this.pageTitles);
		let prevPage = 0;
		for (let i = 0; i < pageNumbers.length - 1; i++) {
			const pageNumber = Number(pageNumbers[i]);
			if (prevPage == 0 || pageNumber - prevPage > 20) {
				prevPage = pageNumber;
			} else {
				continue;
			}
			plotBands.push({
				label: {
					x: pageNumber,
					y: 20,
					text: `<span class='label-page-title'>
						${this.pageTitles[pageNumber]}
					</span>`
				},
				from: pageNumber,
				to: pageNumbers[i + 1] - 1,
				color: 'transparent',
				verticalAlign: 'top',
				useHTML: true
			});
		};
		let options = {
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
				spacingBottom: 10,
				spacingLeft: 10,
				spacingRight: 10,
				height: 140
			},
			xAxis: {
				visible: true,
				opposite: true,
				plotBands: plotBands
				// labels: {
				// 	formatter: function () {
				// 		console.log("this.pos", this.pos)
				// 		return getPageTitle(this.pos);
				// 	}
				// }
			},
			yAxis: {
				visible: false
			},
			tooltip: {
				enabled: false,
			},
			plotOptions: {
				series: {
					allowPointSelect: true,
					lineWidth: 20,
					pointWidth: 20,
				},
			},
			series: [
				{
					animation: false,
					data: bookmarks,
					type: "line",
					lineWidth: 10,
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
							if (this.point.x != 0 && this.point.x != currentPages &&
								popups && popups.hasOwnProperty(lastpopup)) {
								if (this.point.x > popups[lastpopup].page) {
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
							load: function (e) {
								e.preventDefault();
							},
							select: function (e) {
								e.preventDefault();
								parentCallback(this.options.key)
							}
						}
					},
				},
				{
					cursor: "pointer",
					allowPointSelect: true,
					point: {
						events: {
							load: function (e) {
								e.preventDefault();
							},
							select: function (e) {
								e.preventDefault()
								parentCallback(this.options.key)
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
					lineWidth: 10,
					color: "#02A87D",
					marker: {
						enabled: true,
						symbol: 'diamond'
					},
				},
			],
		}

		this.setState({
			options,
			optionsChanged: true
		})
	}

	getPageTitle(pageNumber) {
		let pageTitle;
		let pageNumbers = Object.keys(this.pageTitles);
		for (let i = 1; i < pageNumbers.length; i++) {
			let prevPageNumber = pageNumbers[i - 1];
			let currentPageNumber = pageNumbers[i];
			if (prevPageNumber <= pageNumber && currentPageNumber >= pageNumber) {
				if (Math.abs(prevPageNumber - pageNumber) > Math.abs(currentPageNumber - pageNumber)) {
					pageTitle = this.pageTitles[currentPageNumber];
				} else {
					pageTitle = this.pageTitles[prevPageNumber];
				}
			}
		}
		if (pageTitle)
			return `<span class='label-page-title'>
				${pageTitle}
			</span>`;
		return null;
	}

	render() {
		return (
			this.state.options ? <BookTimelineComponent last={this.props.last} options={this.state.options} /> : <></>
		)
	}
}

export default BookTimeline;