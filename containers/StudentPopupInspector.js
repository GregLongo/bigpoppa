import React, { Component } from "react";
import { connect } from "react-redux";
import PopupInspector from "../components/PopupInspector";

export class StudentPopupInspector extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	// shouldComponentUpdate(newProps, newState) {
	// 	return newProps.activePopup != this.props.activePopup;
	// }

	componentDidUpdate() {
	}

	render() {
		return this.props.activePopup && (
			<PopupInspector popup={this.props.activePopup} popups={this.props.popups} />
		)
	}
}

StudentPopupInspector.propTypes = {
}

StudentPopupInspector.defaultProps = {
	// activePopup:
}

const mapStateToProps = (state) => ({
	activePopup: state.thisStudent.activePopup,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentPopupInspector)
