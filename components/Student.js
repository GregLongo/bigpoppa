import React, { Component } from 'react';
import { getStudent } from '../store/actions/studentAction';
import PropTypes from 'prop-types';
import BulletChart from "../components/BulletChart.js"
import {connect} from 'react-redux'
import styled from "@emotion/styled"
import Scores from "../components/Scores.js"


export class Student extends Component {


  componentDidMount() {
    // console.log(this.props.student)
    this.props.onGetStudent(this.props.classroom, this.props.student);
  }

  shouldComponentUpdate(newProps, newState){
    return newProps.studentVal != this.props.studentVal;
  }

  render() {
    const Student = styled.div`
      display: grid;
      grid-template-columns: 30% 70%;
      height: 140px;
      width: 380px;
      /* margin: 24px; */
      padding: .5rem 1rem;
      background-color: #fff;
      align-items: center;
      border-radius: 10px;
      &:hover{
        outline: 2px solid  #ccc ;
      }
    `
    const Avatar = styled.img`
      width: 50%;
      max-height: 50%
    `
    const NameScore = styled.div`
      display: flex;
      justify-content: space-between;
      padding: .5rem .5rem 0 .5rem
    `


    // console.log(this.props.studentVal)

    return (
      <Student>
      <Avatar src={'img/bulb.png'} />
      <div>
      <NameScore><span>{this.props.studentVal.studentId}</span><Scores popups={22} interactive={11} something={3} /></NameScore>
        {/* <div>speed:{!this.props.studentVal  ? `` : this.props.studentVal.speed}</div> */}
        {!this.props.studentVal ? `` : this.props.studentVal.speed > 0 ?
          <BulletChart val={parseFloat(this.props.studentVal.speed)} max={2000} title={'Avg Speed'} color={'#77C294'}/>
          : null}
      </div>
    </Student>
    )
  }
}

Student.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  studentVal: PropTypes.object,
  onGetStudent: PropTypes.func,
  // peanut: PropTypes.string
};

Student.defaultProps = {
}


const mapStateToProps = (state) => ({
  isLoading: state.myList.isLoading,
  error: state.myList.error,
  studentVal: state.myList.studentVal,
  // peanut: state.myList.peanut
});

const mapDispatchToProps = (dispatch) => ({
  onGetStudent: (classrooom, student) => dispatch(getStudent(classrooom, student))
})

export default connect(mapStateToProps, mapDispatchToProps)(Student);
