import React, { Component } from "react"
import { getTimestamps } from "../store/actions/timestampsAction"
import PropTypes from "prop-types"
import { connect } from "react-redux"

export class TimelineProvider extends Component {

	componentDidMount() {
		this.props.onGetTimestamps(this.props.classroom, this.props.student)
	}

	shouldComponentUpdate(newProps, newState) {
		return newProps.timestampsVal != this.props.timestampsVal
	}

	render() {
		return (
			<div>
				<div>
					{React.cloneElement(this.props.children, {
						events: this.props.timestampsVal.children,
					})}
				</div>
			</div>
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
	onGetTimestamps: (classrooom, student) =>
		dispatch(getTimestamps(classrooom, student)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TimelineProvider)
