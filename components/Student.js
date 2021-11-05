// import React, {useEffect} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import {getStudent} from '../store/actions/studentAction'
// import BulletChart from "../components/BulletChart.js"
//
// const Student = (props) => {
//     const dispatch = useDispatch()
//     const myList = useSelector(state => state.myList)
//     const {loading, error, studentVal} = myList
//     useEffect(() => {
//         dispatch(getStudent(props.studentId, props.classId))
//       }, [dispatch])
//     return (
//         <>
//         {console.log('ddd')}
//           {loading ? "Loading..." : error ? error.message :
//           <div>
//             <div>{props.studentId}</div>
//             <div>{studentVal.speed}</div>
//             <BulletChart val={studentVal.speed} max={10} title={'Avg Speed'} color={'#77C294'}/>
//           </div>
//           }
//         </>
//     )
// }
//
// export default Student

import React, { Component } from 'react';
import { getStudent } from '../store/actions/studentAction';
import PropTypes from 'prop-types';
import BulletChart from "../components/BulletChart.js"
import {connect} from 'react-redux'

export class Student extends Component {
  componentDidMount() {
    this.props.onGetStudent();
  }

  shouldComponentUpdate(newProps, newState){
    return newProps.studentVal != this.props.studentVal;
  }

  render() {
    return this.props.loading ? "Loading..." : this.props.error ? this.props.error.message :
      <div>
        <div>{this.props.studentId}</div>
        <div>{this.props.studentVal.speed}</div>
        {this.props.studentVal.speed > 0 ?
          <BulletChart val={parseFloat(this.props.studentVal.speed)} max={10} title={'Avg Speed'} color={'#77C294'}/>
          : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(Student);
