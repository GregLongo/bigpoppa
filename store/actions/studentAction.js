import {GET_STUDENT, STUDENT_ERROR} from '../types'
import axios from 'axios';
import request from '../request.js'

export const getStudent = (studentId,classId) => async dispatch => {

  const url = `class/218/student/Brijesh/`;
  const response = request(url).then(resp => {
    // console.log(resp.data)
    dispatch( {
            type: GET_STUDENT,
            payload: resp.data
        })
  }).catch(exception => {
    dispatch( {
            type: STUDENT_ERROR,
            payload: exception,
        })
  });
}
