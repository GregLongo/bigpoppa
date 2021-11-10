import {GET_STUDENT_BOOK, STUDENT_BOOK_ERROR} from '../types'
import axios from 'axios';
import request from '../request.js'

export const getStudentBook = (classroom, student, book ) => async dispatch => {

  const url = `class/${classroom}/student/${student}/book/${book}/`;
  const response = request(url).then(resp => {
    // console.log(resp.data)
    dispatch( {
            type: GET_STUDENT_BOOK,
            payload: resp.data
        })
  }).catch(exception => {
    dispatch( {
            type: STUDENT_BOOK_ERROR,
            payload: exception,
        })
  });
}
