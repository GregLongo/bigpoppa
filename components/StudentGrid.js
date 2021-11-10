import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Link from 'next/link'
import { useRouter } from "next/router"
import Student from "./Student_Functional.js"
import styled from "@emotion/styled"

import {getStudent} from '../store/actions/studentAction.js'



export default function StudentGrid({students, classroom}){

    const StudentGrid = styled.ul`
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 1rem;
      @media(min-width:880px){
        grid-template-columns: 50% 50%;
      }
    `

    const dispatch = useDispatch()
    const myList = useSelector(state => state.myList)
    const {loading, error, studentVal} = myList
    const [returnMe, setReturn] = useState([]);



    useEffect(() => {
      students.map(key => {
        dispatch(getStudent(classroom, key))
        })
      }, [dispatch])

      useEffect(()=>{
        returnMe.push(studentVal)
      },[studentVal])
      //
      useEffect(()=>{
        console.log(returnMe)
      },[returnMe])
      console.log(returnMe)


    // console.log(students)

    // const returnMe = students.map((key,id) =>(
    //   <div key={id}>
    //   <Link href={{
    //     pathname:"/ThisStudent",
    //     query: {student:[key],classroom:classroom}
    //   }}>
    //   <a>
    //       {/* <Student student={key} classroom={classroom}/> */}
    //        </a>
    //        </Link>
    //     </div>
    //   )
    // )

  return(
      <StudentGrid>
        {/* {returnMe ? returnMe.studentId : 'meow'} */}
        {/* <Student student={studentVal} classroom={"Super"}/> */}
        {/* {returnMe} */}
       {
         returnMe.map((key,id) => {
           return (
             <Link key={id} href={{
                 pathname:"/ThisStudent",
                 query: {student:[key.studentId],classroom:classroom}
               }}>
               <a >
              <Student student={key.studentId} speed={key.speed}/>
            </a>
          </Link>
           )
         })
     }
    </StudentGrid>
  )
}
