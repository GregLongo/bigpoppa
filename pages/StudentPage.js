import React, { useState, useEffect } from 'react'
import Classroom from '../components/Classroom.js'
import Teacher from "../components/Teacher.js"



export default function StudentPage({classroom}) {
  // console.log(classroom)
  return (

        <div >
          <Teacher teacher={classroom}/>
          <Classroom classId={classroom}/>
        </div>
  )
}


StudentPage.getInitialProps = ({query: { classroom } }) =>{
  return { classroom }
}
