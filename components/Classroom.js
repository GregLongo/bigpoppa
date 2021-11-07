import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {useDispatch, useSelector} from 'react-redux'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router"
import Link from 'next/link'
import {getClassroom} from '../store/actions/classroomAction'

import StudentGrid from "/components/StudentGrid.js"
import StudentList from "/components/StudentList.js"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faTh
} from "@fortawesome/free-solid-svg-icons";


export default function Classroom({classId}) {


  const dispatch = useDispatch()
  const classRoster = useSelector(state => state.classRoster)
  const {loading, error, classroomVal} = classRoster
  useEffect(() => {
      dispatch(getClassroom(classId))
    }, [dispatch])

  const [isGrid, setGrid] = useState(true);

  const students=classroomVal;

    console.log(classId)


  return (
    <>
    {loading ? "Loading..." : error ? error.message :
    <div>
    <div>
      <span>Students</span>
      <span>
      <button onClick={()=>{
        setGrid(false)
      }}>
        <FontAwesomeIcon icon={faList} />
      </button>
      <button  onClick={()=>{
        setGrid(true)
      }}>
        <FontAwesomeIcon icon={faTh} />
      </button>
      </span>
    </div>
        {
           isGrid ?
          <StudentGrid students={students} classroom={classId}/>
          : <StudentList students={students} classroom={classId}/>
        }
    </div>}
  </>
  )
}
