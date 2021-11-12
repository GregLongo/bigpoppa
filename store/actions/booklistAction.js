import {GET_BOOKLIST, BOOKLIST_ERROR} from '../types'
import axios from 'axios';
import request from '../request.js'

export const getBookList = () => async dispatch => {

  const url = `book/`;
  const response = request(url).then(resp => {
    // console.log(resp.data)
    dispatch( {
            type: GET_BOOKLIST,
            payload: resp.data
        })
  }).catch(exception => {
    dispatch( {
            type: BOOKLIST_ERROR,
            payload: exception,
        })
  });
}
