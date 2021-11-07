import {useState, useCallback, useEffect} from "react"
import DayTimeline from "../components/DayTimeline"
import PopupsProvider from "../components/PopupsProvider"
import TimelineProvider from "../components/TimelineProvider"
import PopupInspector from "../components/PopupInspector.js"
import BookTimeline from "../components/BookTimeline.js"

export default function ThisStudent(){

  const [thisPopup, selectPopup] = useState('LP3');

    const parentCallback = useCallback((poppers) =>{
      selectPopup('test');
    },[])
    console.log(thisPopup)
    let po = thisPopup;

  return (
    <>
    <PopupsProvider>
      <BookTimeline />
    </PopupsProvider>
    {/* <PopupsProvider>
      <TimelineProvider>
        <DayTimeline parentCallback={parentCallback}/>
      </TimelineProvider>
    </PopupsProvider>
    <PopupInspector test={po}/> */}
    </>
  )
}
