
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getClasslist} from '../store/actions/classlistAction'
import Dropdown from "../components/Dropdown.js"
import styled from "@emotion/styled"

const ClassSelect = () => {

  const Splash = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 25%;
  margin-bottom: auto;
  width: fit-content;
  height: fit-content;
  text-align: center
`
const Title= styled.div`
  font-size: 36px
`
const Subtitle= styled.div`
  font-size: 24px;
  margin: 2rem;
`
    const dispatch = useDispatch()
    const classList = useSelector(state => state.classList)
    const {loading, error, classlistVal} = classList
    useEffect(() => {
        dispatch(getClasslist())
      }, [dispatch])
    return (
        <>
          {loading ? "Loading..." : error ? error.message :
          <Splash>
          <Title>Living Popups Teacher's Edition</Title>
          <Subtitle>Please Choose Your Class </Subtitle>
          <Dropdown paths={classlistVal} />
          </Splash>
          }
        </>
    )
}

export default ClassSelect
