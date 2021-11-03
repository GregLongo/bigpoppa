
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getClassroom} from '../store/actions/classroomAction'
import Student from './Student.js'

const Classroom = (props) => {
    const dispatch = useDispatch()
    const classRoster = useSelector(state => state.classRoster)
    const {loading, error, classroomVal} = classRoster
    const [myArray, setArray] = useState([]);

    useEffect(() => {
        dispatch(getClassroom(props.classId))
      }, [dispatch])
      // classroomVal.length > 0 ? console.log(classroomVal) : null
      useEffect(() => {
        var temp = [];
        if(classroomVal.length > 0) {
          Object.keys(classroomVal).map((v)=>{
              temp.push(<Student key={v} studentId={classroomVal[v]} />)
        })
        setArray(temp)
      }
      },[classroomVal])
      console.log(myArray)
    return (
        <>
        {
          myArray
        }
        </>
    )
}

export default Classroom
