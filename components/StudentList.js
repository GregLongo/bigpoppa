import React, {useEffect} from 'react'
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

console.log(studentVal)

  const pupils = [];
  useEffect(() => {
      Object.keys(props.students).map((key,id)=>{
        console.log(props.students[key])
        dispatch(getStudent(props.classroom, props.students[key]))
        pupils.push({
          key:key,
          name:props.students[key],
          avatar:'img/bulb.png',
          speed:studentVal.speed,
        })
      })

    }, [dispatch])



  console.log(pupils)
  const data = React.useMemo(
    ()=>pupils,
    []
  )

  return (
      <SortableTable columns={headers} data={data} />
  )
}
