import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import Student from "./Student.js"




export default function StudentGrid({students, classroom}){

    const returnMe = students.map((key,id) =>(
      <div key={key}>
      <Link href={{
        pathname:"/ThisStudent",
        query: {student:[key],classroom:classroom}
      }}>
      <a>
          <Student student={key} classroom={classroom}/>
           </a>
           </Link>
        </div>
      )
    )

  return(
    <div >
      {returnMe}
    </div>
  )
}
