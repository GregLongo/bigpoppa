import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useTable, useSortBy } from 'react-table'
import SortableTable from "/components/SortableTable.js"
// import makeData from './makeData'
import { getStudent } from '../store/actions/studentAction';


export default function StudentList(props) {
  const dispatch = useDispatch()
  const myList = useSelector(state => state.myList)
  const {loading, error, studentVal} = myList



  const headers =[
    {
      accessor: 'avatar',
      Cell:({cell:{value}})=>(
          <img src={value} />
        )
    },
    {
      Header: 'name',
      accessor: 'name'
    },
    {
      Header: 'speed',
      accessor: 'speed'
    },
  ];

// console.log(studentVal)

  const [pupils, setPupils] = useState([]);
  useEffect(() => {
      (props.students).map((key,id)=>{
        // console.log(key)
        dispatch(getStudent(props.classroom, key))
      })
    }, [dispatch])

  useEffect(()=>{
    pupils.push({
      key: studentVal.studentId,
      name: studentVal.studentId,
      avatar:'img/bulb.png',
      speed: !!studentVal ? studentVal.speed : null,
    })
  },[studentVal])


  console.log(pupils)
  const data = React.useMemo(
    ()=>pupils,
    []
  )

  return (
      <SortableTable columns={headers} data={data} />
  )
}
