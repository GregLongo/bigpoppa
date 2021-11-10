import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Link from 'next/link'
import { useRouter } from "next/router"
import Student from "./Student_Functional.js"
import styled from "@emotion/styled"

import {getStudent} from '../store/actions/studentAction.js'
import {getStudentBook} from '../store/actions/studentbookAction.js'



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
    const [popCounts, setCount] = useState([]);

    const dispatch2 = useDispatch()
    const studentBookList = useSelector(state => state.studentBookList)
    const {loading2, error2, studentBookVal} = studentBookList

    useEffect(() => {
      students.map(key => {
        dispatch(getStudent(classroom, key))
        dispatch2(getStudentBook(classroom, key))
        })
      }, [dispatch])

      useEffect(() => {
        students.map(key => {
          })
        }, [dispatch2])

      useEffect(()=>{
        returnMe.push(studentVal)
      },[studentVal])

      useEffect(()=>{
        popCounts.push(studentBookVal.popupCount)
      },[studentBookVal])


      //

      // console.log(returnMe)

      //
      // useEffect(() => {
      //   students.map(key => {
      //     })
      //   }, [dispatch])

        // console.log(studentBookVal)


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
              <Student popupCount={popCounts[id]} student={key.studentId} speed={key.speed}/>
            </a>
          </Link>
           )
         })
     }
    </StudentGrid>
  )
}
