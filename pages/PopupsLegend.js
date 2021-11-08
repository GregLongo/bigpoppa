import React, {useState, useCallback, useEffect} from "react"
import PopupsTable from '../components/PopupsTable.js'
import {useDispatch, useSelector} from 'react-redux'
import {getPopups} from '../store/actions/popupsAction'
import PopupInspector from "../components/PopupInspector.js"

export default function PopupsLegend(){

  const dispatch = useDispatch()
  const popupsList = useSelector(state => state.popupsList)
  const {loading, error, popupsVal} = popupsList
  const papusas = []

  const [lp, setLP] = useState(0);

  const callback = useCallback((lp) =>{
    setLP(lp);
    console.log(lp)
  },[]);

  const expandedPopup = lp ? popupsVal[lp] : 'choose popup';

  // const selectedPopup = {
  //   title: expandedPopup.title,
  //   category: expandedPopup.category,
  //   text: expandedPopup.text
  // }

  useEffect(() => {
      dispatch(getPopups())
    }, [dispatch])

    Object.keys(popupsVal).map((key,id)=>{
      papusas.push({
        lp:key,
        title:popupsVal[key]['popup title'],
        category:'test',
        page:popupsVal[key].page,
        interactive:popupsVal[key]['popup type'],
      })
    })


return(
  <>
  {papusas.length > 1  ?  <PopupsTable papusas={papusas}  grandParentCallback={callback} />  : ``}
  {!!popupsVal[lp] ? <PopupInspector popup={lp} popups={popupsVal}/> : ``}

</>
)

}
