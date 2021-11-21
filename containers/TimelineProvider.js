import PropTypes from "prop-types"
import React, { Component } from "react"
import { connect } from "react-redux"
import { getTimestamps } from "../store/actions/timestampsAction"
import BookTimeline from "./BookTimeline.js"
import DayTimeline from "./DayTimeline"

export class TimelineProvider extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (this.props.student.hasOwnProperty('nowReading'))
			this.props.onGetTimestamps(this.props.classroom, this.props.student.studentId, this.props.student.nowReading)
	}

	shouldComponentUpdate(newProps, newState) {
		return newProps.currentPages != this.props.currentPages ||
			newProps.timestampsVal.page != this.props.timestampsVal.page ||
			newProps.timestampsVal.size != this.props.timestampsVal.size;
	}

	render() {
		return this.props.timestampsVal && (
			<React.Fragment>
				<BookTimeline
					parentCallback={this.props.parentCallback}
					pages={this.props.currentPages}
					popups={this.props.popupsVal}
					last={this.props.student.lastEvent
						? this.props.student.lastEvent.popupId
						: `LP001`
					}
				/>
				<DayTimeline
					parentCallback={this.props.parentCallback}
					popups={this.props.popupsVal}
					events={this.props.timestampsVal.children}
				/>
			</React.Fragment>
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
