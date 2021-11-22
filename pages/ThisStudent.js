import React from "react"
import { connect } from "react-redux"
import ThisStudentComponent from '../components/ThisStudent.js'
import { getPopups } from "../store/actions/popupsAction"
import { updateActivePopup } from "../store/actions/thisStudentAction.js";
class ThisStudent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPages: 200,
		}
		this.componentDidMountUpdate = this.componentDidMountUpdate.bind(this);
	}

	componentDidMount() {
		if (this.props.studentVal && this.props.studentVal.nowReading) {
			this.componentDidMountUpdate();
		}
	}

	shouldComponentUpdate(newProps, newState) {
		return !this.props.studentVal || this.props.studentVal.studentId != newProps.studentVal.studentId ||
			this.props.popupsVal != newProps.popupsVal ||
			this.state.currentPages != newState.currentPages;
	}

	// multiple sources of truth for avatars etc, this is wonky. why are we doing this?
	// const thisStudent = useSelector((state) => state.thisStudent)
	// const { loading4, error4, student: studentVal } = thisStudent;
	// if (!studentVal) {
	// 	console.log("refetch this student:", props);
	// }

	componentDidUpdate(prevProps, prevState) {
		if (this.props.studentVal && this.props.studentVal.nowReading != prevProps.studentVal.nowReading) {
			this.componentDidMountUpdate();
		}
	}

	componentDidMountUpdate() {
		let currentPages;
		this.props.onGetPopups(this.props.studentVal.nowReading);
		switch (this.props.studentVal.nowReading) {
			case "BC001":
				currentPages = 155;
				break;
			case "AFARM":
				currentPages = 121;
				break;
			case "Romeo":
				currentPages = 195;
				break;
			case "Hamlet":
				currentPages = 201;
				break;
			default:
				currentPages = 200;
		}
		if (currentPages) {
			this.setState({
				currentPages
			})
		}
	}

	render() {

		return this.props.studentVal && (
			<ThisStudentComponent
				studentVal={this.props.studentVal}
				classroom={this.props.classroom}
				popupsVal={this.props.popupsVal}
				currentPages={this.state.currentPages}
				onSelectPopup={this.props.onUpdateActivePopup}
			/>
		)
	}
}


const mapStateToProps = (state) => ({
	isLoading: state.thisStudent.isLoading,
	error: state.thisStudent.error,
	studentVal: state.thisStudent.student,
	popupsVal: state.popupsList.popupsVal
})

const mapDispatchToProps = (dispatch) => ({
	onGetPopups: (bookId) => dispatch(getPopups(bookId)),
	onUpdateActivePopup: (bookId) => dispatch(updateActivePopup(bookId))
})

ThisStudent = connect(mapStateToProps, mapDispatchToProps)(ThisStudent);

const ThisStudentWrapper = (props) => {
	return <ThisStudent {...props} />
}

ThisStudentWrapper.getInitialProps = ({ query: { student, classroom } }) => {
	return { student, classroom }
}

export default ThisStudentWrapper;