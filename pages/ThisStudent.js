import React, {useState, useCallback, useEffect} from "react"
import DayTimeline_functional from "../components/DayTimeline_functional"
import PopupsProvider from "../components/PopupsProvider"
import TimelineProvider from "../components/TimelineProvider"
import PopupInspector from "../components/PopupInspector.js"
import BookTimeline from "../components/BookTimeline.js"
import {useDispatch, useSelector} from 'react-redux'
import {getPopups} from '../store/actions/popupsAction'

export default function ThisStudent(){

  const [thisPopup, selectPopup] = useState('LP001');

    const parentCallback = useCallback((poppers) =>{
      selectPopup(poppers);
    },[])
    console.log(thisPopup)


    const dispatch = useDispatch()
    const popupsList = useSelector(state => state.popupsList)
    const {loading, error, popupsVal} = popupsList

    useEffect(() => {
        dispatch(getPopups())
      }, [dispatch])
      console.log(popupsVal)


  return (
    <>
      <BookTimeline parentCallback={parentCallback}  popups={popupsVal}/>
      <TimelineProvider>
        <DayTimeline_functional parentCallback={parentCallback} popups={popupsVal}/>
      </TimelineProvider>
      {!!popupsVal[thisPopup] ? <PopupInspector popup={thisPopup} popups={popupsVal}/> : ``}
    </>
  )
}
