
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPopups} from '../store/actions/popupsAction'

const Popups = () => {
    const dispatch = useDispatch()
    const popupsList = useSelector(state => state.popupsList)
    const {loading, error, popupsVal} = popupsList
    useEffect(() => {
        dispatch(getPopups())
      }, [dispatch])
    return (
        <>
          {loading ? "Loading..." : error ? error.message :
          <div>
            <div>{popupsVal}</div>
          </div>
          }
        </>
    )
}

export default Popups
