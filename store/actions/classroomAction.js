import {GET_CLASSROOM, CLASSROOM_ERROR} from '../types'
import axios from 'axios';
import request from '../request.js'

export const getClassroom = (thisClass) => async dispatch => {
  const url = `class/${thisClass}/student`;
  const response = request(url).then(resp => {
    dispatch( {
            type: GET_CLASSROOM,
            payload: resp.data
        })
  }).catch(exception => {
    dispatch( {
            type: CLASSROOM_ERROR,
            payload: exception,
        })
  });
}
