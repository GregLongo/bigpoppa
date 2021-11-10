import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {useDispatch, useSelector} from 'react-redux'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router"
import Link from 'next/link'
import {getClassroom} from '../store/actions/classroomAction'
import styled from "@emotion/styled"
import { css } from '@emotion/react';

import StudentGrid from "/components/StudentGrid.js"
import StudentList from "/components/StudentList.js"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faTh
} from "@fortawesome/free-solid-svg-icons";


export default function Classroom({classId}) {

  const Heading = styled.div`
    padding-top: 2rem;
    padding-left: 3rem;
    padding-right: 3rem;
    display: flex;
    justify-content: space-between;
    font-size: 24px;
  `
  const ViewButton = styled.button`
    cursor: pointer;
    margin-left: 1rem;
    background-color: transparent;
    border: none;
    font-size: 24px;
  `

  const listButton = ({isGrid}) => css`
    opacity: .3;
    &:hover{
      opacity: .4
    }
    ${isGrid === false && `
      opacity: 1 !important
    `}
  `

  const gridButton = ({isGrid}) => css`
  opacity: .3;
    &:hover{
      opacity: .4
    }
    ${isGrid === true && `
      opacity: 1 !important
    `}
  `



  const dispatch = useDispatch()
  const classRoster = useSelector(state => state.classRoster)
  const {loading, error, classroomVal} = classRoster
  useEffect(() => {
      dispatch(getClassroom(classId))
    }, [dispatch])

  const [isGrid, setGrid] = useState(true);

  const students=classroomVal;

    // console.log(classId)


  return (
    <>
    {loading ? "Loading..." : error ? error.message :
    <div>
    <Heading>
      <span>Students</span>
      <span>
      <ViewButton css={listButton({isGrid})} onClick={()=>{
        setGrid(false)
      }}>
        <FontAwesomeIcon icon={faList} />
      </ViewButton>
      <ViewButton css={gridButton({isGrid})} onClick={()=>{
        setGrid(true)
      }}>
        <FontAwesomeIcon icon={faTh} />
      </ViewButton>
      </span>
    </Heading>
        {
           isGrid ?
          <StudentGrid students={students} classroom={classId}/>
          : <StudentList students={students} classroom={classId}/>
        }
    </div>}
  </>
  )
}
