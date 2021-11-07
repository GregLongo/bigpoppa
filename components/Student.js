import React, { Component } from 'react';
import { getStudent } from '../store/actions/studentAction';
import PropTypes from 'prop-types';
import BulletChart from "../components/BulletChart.js"
import {connect} from 'react-redux'

export class Student extends Component {
  componentDidMount() {
    console.log(this.props.student)
    this.props.onGetStudent(this.props.classroom, this.props.student);
  }

  shouldComponentUpdate(newProps, newState){
    return newProps.studentVal != this.props.studentVal;
  }

  render() {
    console.log(this.props.studentVal)

    return (
      <div>
        <div>{this.props.student}</div>
        <div>speed:{!this.props.studentVal  ? `` : this.props.studentVal.speed}</div>
        {!this.props.studentVal ? `` : this.props.studentVal.speed > 0 ?
          <BulletChart val={parseFloat(this.props.studentVal.speed)} max={10} title={'Avg Speed'} color={'#77C294'}/>
          : null}
      </div>)
  }
}

Student.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  studentVal: PropTypes.object,
  onGetStudent: PropTypes.func
};

Student.defaultProps = {
}


const mapStateToProps = (state) => ({
  isLoading: state.myList.isLoading,
  error: state.myList.error,
  studentVal: state.myList.studentVal,
});

const mapDispatchToProps = (dispatch) => ({
  onGetStudent: (classrooom, student) => dispatch(getStudent(classrooom, student))
})

export default connect(mapStateToProps, mapDispatchToProps)(Student);
