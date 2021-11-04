
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getTimestamps} from '../store/actions/timestampsAction'

const DayTimeline = () => {
    const dispatch = useDispatch()
    const timestampsList = useSelector(state => state.timestampsList)
    const {loading, error, timestampsVal} = timestampsList
    const timestamps = [];

    useEffect(() => {
        dispatch(getTimestamps())
      }, [dispatch])

        Object.keys(timestampsVal).map(v=>{
          timestamps.push(timestampsVal[v].timestamp)
        })
    return (
        <>
          {loading ? "Loading..." : error ? error.message :
          <div>
            <div>{timestamps.map(t=>{return <div>{t}</div>})}</div>
          </div>
          }
        </>
    )
}

export default DayTimeline
