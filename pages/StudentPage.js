import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Classroom from '../components/Classroom.js'
import Teacher from "../components/Teacher.js"
import { getStudent } from '../store/actions/studentAction';
import {getStudentBook} from '../store/actions/studentbookAction.js'
import {getClassroom} from '../store/actions/classroomAction'



export default function StudentPage({classroom}) {
  // console.log(classroom)

  const dispatch = useDispatch()
  const classRoster = useSelector(state => state.classRoster)
  const {loading, error, classroomVal} = classRoster
  useEffect(() => {
      dispatch(getClassroom(classroom))
    }, [dispatch])


  const students=classroomVal;

  const dispatch2 = useDispatch()
  const myList = useSelector(state => state.myList)
  const {loading2, error2, studentVal} = myList

  const dispatch3 = useDispatch()
  const studentBookList = useSelector(state => state.studentBookList)
  const {loading3, error3, studentBookVal} = studentBookList


  const [pupils, setPupils] = useState([]);
  useEffect(() => {
      (students).map((key,id)=>{
        dispatch2(getStudent(classroom, key))
        dispatch3(getStudentBook(classroom, key))
      })
    }, [classroomVal])


  useEffect(()=>{
    pupils.push({
      key: studentVal.studentId,
      name: studentVal.studentId,
      avatar:'img/bulb.png',
      speed: studentVal.speed,
      popupCount: studentBookVal.popupCount
    })
  },[studentVal])




//
  return (

        <div >
          <Teacher teacher={classroom}/>
           <Classroom students={pupils} classId={classroom}/>
        </div>
  )
}


StudentPage.getInitialProps = ({query: { classroom } }) =>{
  return { classroom }
}
