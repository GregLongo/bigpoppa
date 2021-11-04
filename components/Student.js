import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getStudent} from '../store/actions/studentAction'
import BulletChart from "../components/BulletChart.js"

const Student = (props) => {
    const dispatch = useDispatch()
    const myList = useSelector(state => state.myList)
    const {loading, error, studentVal} = myList

    let component;

    useEffect(() => {
        dispatch(getStudent(props.studentId, props.classId))
      }, [dispatch])


      // component = studentVal == null ? `error` : <BulletChart val={studentVal.speed} max={10} title={'Avg Speed'} color={'#77C294'}/>

      if(studentVal != null){
        // console.log(myList)
        return <BulletChart val={studentVal.speed} max={10} title={'Avg Speed'} color={'#77C294'}/>
      }else{
        return ``
      }
    // return (
    //     <>
    //       {loading ? "Loading..." : error ? error.message :
    //       <div>
    //         <div>{props.studentId}</div>
    //         <div>{studentVal.speed}</div>
    //         {component}
    //       </div>
    //       }
    //     </>
    // )
}

export default Student
