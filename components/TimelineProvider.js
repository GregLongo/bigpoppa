import PropTypes from "prop-types"
import React, { Component } from "react"
import { connect } from "react-redux"
import BookTimeline from "../components/BookTimeline.js"
import DayTimeline_functional from "../components/DayTimeline_functional"
import { getTimestamps } from "../store/actions/timestampsAction"

export class TimelineProvider extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		if (this.props.student.hasOwnProperty('nowReading'))
			this.props.onGetTimestamps(this.props.classroom, this.props.student.studentId, this.props.student.nowReading)
	}

	shouldComponentUpdate(newProps, newState) {
		return !!newProps.timestampsVal || newProps.timestampsVal != this.props.timestampsVal
	}

	render() {
		return (
			<>
				<BookTimeline
					parentCallback={this.props.parentCallback}
					pages={this.props.currentPages}
					popups={this.props.popupsVal}
					last={
						this.props.student
							? this.props.student.lastEvent
								? this.props.student.lastEvent.popupId
								: `LP001`
							: `LP001`
					}
				/>
				<DayTimeline_functional
					parentCallback={this.props.parentCallback}
					popups={this.props.popupsVal}
					events={this.props.timestampsVal.children}
				/>
			</>
		)
	}
}

TimelineProvider.propTypes = {
	isLoading: PropTypes.bool,
	error: PropTypes.object,
	timestampsVal: PropTypes.object,
	onGetTimestamps: PropTypes.func,
}

TimelineProvider.defaultProps = {}

const mapStateToProps = (state) => ({
	isLoading: state.timestampsList.isLoading,
	error: state.timestampsList.error,
	timestampsVal: state.timestampsList.timestampsVal,
})

const mapDispatchToProps = (dispatch) => ({
	onGetTimestamps: (classrooom, student, bookId, page, size) =>
		dispatch(getTimestamps(classrooom, student, bookId, page, size)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TimelineProvider)
