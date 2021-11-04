import React, { Component } from 'react';
import { getStudent } from '../store/actions/studentAction';
import PropTypes from 'prop-types';
export class Student extends Component {
  componentDidMount() {
    this.props.onGetStudent();
  }

  shouldComponentUpdate(newProps, newState){
    return newProps.studentVal != this.props.studentVal;
  }

  render() {
    return loading ? "Loading..." : error ? error.message :
      <div>
        <div>{props.studentId}</div>
        <div>{studentVal.speed}</div>
        {component}
      </div>
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
  onGetStudent: () => dispatch(getStudent())
})

export default connect(mapStateToProps, mapDispatchToProps)(GUI);
