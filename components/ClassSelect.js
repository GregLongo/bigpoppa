
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getClasslist} from '../store/actions/classlistAction'
import Dropdown from "../components/Dropdown.js"

const ClassSelect = () => {
    const dispatch = useDispatch()
    const classList = useSelector(state => state.classList)
    const {loading, error, classlistVal} = classList
    useEffect(() => {
        dispatch(getClasslist())
      }, [dispatch])
    return (
        <>
          {loading ? "Loading..." : error ? error.message :
          <div>
            <div>Choose Class </div>
            <Dropdown paths={classlistVal} />
          </div>
          }
        </>
    )
}

export default ClassSelect
