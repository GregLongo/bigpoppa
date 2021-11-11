import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useTable, useSortBy } from 'react-table'
import SortableTable from "/components/SortableTable.js"
// import makeData from './makeData'
import { getStudent } from '../store/actions/studentAction';


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
      Header: 'popupCount',
      accessor: 'popupCount'
    },
    {
      Header: 'speed',
      accessor: 'speed'
    },
  ];

  const data = React.useMemo(
    ()=>students,
    []
  )

  return (
      <SortableTable columns={headers} data={data} classroom={classroom}/>
  )
}
