
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getStudent} from '../store/actions/studentAction'

const Student = (props) => {
    const dispatch = useDispatch()
    const myList = useSelector(state => state.myList)
    const {loading, error, studentVal} = myList
    useEffect(() => {
        dispatch(getStudent(props.studentId))
      }, [dispatch])
    return (
        <>
          {loading ? "Loading..." : error ? error.message :
          <div>
            <div>{props.studentId}</div>
            <div>{studentVal.speed}</div>
          </div>
          }
        </>
    )
}

export default Student
