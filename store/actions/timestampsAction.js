import {GET_TIMESTAMPS, TIMESTAMPS_ERROR} from '../types'
import axios from 'axios';
import request from '../request.js'

export const getTimestamps = () => async dispatch => {

  const url = `class/218/student/Brijesh/book/BC001/activity?page=1&limit=1`;
  const response = request(url).then(resp => {
    // console.log(resp.data)
    dispatch( {
            type: GET_TIMESTAMPS,
            payload: resp.data
        })
  }).catch(exception => {
    dispatch( {
            type: TIMESTAMPS_ERROR,
            payload: exception,
        })
  });
}
