import React, {useState, useCallback, useEffect} from "react"
import PopupsTable from '../components/PopupsTable.js'
import {useDispatch, useSelector} from 'react-redux'
import {getPopups} from '../store/actions/popupsAction'
import {getBookList} from '../store/actions/booklistAction'
import PopupInspector from "../components/PopupInspector.js"
import styled from "@emotion/styled"
import { css, jsx } from '@emotion/react'

export default function PopupsLegend(){

    const Legend = styled.div`
    display: grid;
    grid-template-columns: 100% 100%;
    @media(min-width:880px){
      grid-template-columns: 60% 40%;
    }
    `

     const Heading = styled.div`
       padding-top: 2rem;
       padding-bottom: 2rem;
       padding-left: 3rem;
       font-size: 36px;
       border-bottom: 2px solid #CECECE
     `
     const RightContainer = styled.div`
       padding: 1rem 2rem;
       margin: 3rem;
       border-radius: 10px;
     `


       const Drop = styled.select`
         width: 300px;
         height: 42px;
         padding-left: 24px;
         margin-bottom: 2rem;
         margin-right: auto;
         margin-left: auto
       `


  const dispatch = useDispatch()
  const popupsList = useSelector(state => state.popupsList)
  const {loading, error, popupsVal} = popupsList

  const dispatch2 = useDispatch()
  const bookList = useSelector(state => state.bookList)
  const {loading2, error2, booklistVal} = bookList


  const papusas = []

  const [lp, setLP] = useState(0);

  const callback = useCallback((lp) =>{
    setLP(lp);
    // console.log(lp)
  },[]);

  const expandedPopup = lp ? popupsVal[lp] : 'choose popup';

  // const selectedPopup = {
  //   title: expandedPopup.title,
  //   category: expandedPopup.category,
  //   text: expandedPopup.text
  // }


    useEffect(() => {
        dispatch(getBookList())
      }, [dispatch2])


      const [book, setBook] = useState()



  useEffect(() => {
      dispatch(getPopups(book))
    }, [book])

    Object.keys(popupsVal).map((key,id)=>{
      console.log(!popupsVal[key].primary ? null : popupsVal[key].primary[0])
      papusas.push({
        lp:key,
        title:popupsVal[key]['popup title'],
        category: !popupsVal[key].primary ? null : popupsVal[key].primary,
        page:popupsVal[key].page,
        interactive:popupsVal[key]['popup type'],
      })
    })

console.log(popupsVal)
return(
  <>
  <Heading>All Popups</Heading>




  <Legend>
    {papusas.length > 1  ?  <PopupsTable papusas={papusas}  grandParentCallback={callback} />  : ``}
    <RightContainer>
    <Drop value={book} onChange={(e)=>{
      setBook(e.target.value);
    }}><option>Select Book </option>
      {Object.entries(booklistVal).map((b)=>(
        <option key={b[0]} value={b[1]}>{b[1]}</option>
      ))}
    </Drop>
    {!!popupsVal[lp] ? <PopupInspector popup={lp} popups={popupsVal}/> : ``}
    </RightContainer>
  </Legend>
</>
)

}
