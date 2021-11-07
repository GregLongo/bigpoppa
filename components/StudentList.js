import React from 'react'
import { useTable, useSortBy } from 'react-table'
import SortableTable from "/components/SortableTable.js"
// import makeData from './makeData'


export default function StudentList({students, classroom}) {


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
    {
      Header: 'overall',
      accessor: 'overall'
    },
  ];



  const pupils = [];

  Object.keys(students).map((key,id)=>{
    console.log(key)
    pupils.push({
      key:key,
      name:students[key].studentId,
      avatar:'img/bulb.png',
      speed:students[key].speed,
    })
  })

  const data = React.useMemo(
    ()=>pupils,
    []
  )

  return (
      <SortableTable columns={headers} data={data} />
  )
}
