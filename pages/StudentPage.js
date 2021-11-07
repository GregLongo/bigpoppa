import React, { useState, useEffect } from 'react'
import Classroom from '../components/Classroom.js'



export default function StudentPage({classroom}) {
  console.log(classroom)
  return (

        <div >
          <Classroom classId={classroom}/>
        </div>

  )
}


StudentPage.getInitialProps = ({query: { classroom } }) =>{
  return { classroom }
}
