import {GET_STUDENT, STUDENT_ERROR} from '../types'
import axios from 'axios';
import request from '../request.js'

export const getStudent = (classroom, student) => async dispatch => {
  // console.log(classroom)
  const url = `class/${classroom}/student/${student}`;
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
