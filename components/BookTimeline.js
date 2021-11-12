import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import Link from 'next/link'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import 'highcharts/modules/timeline'
import styles from '../styles/Home.module.css'
import styled from "@emotion/styled"
import { css } from '@emotion/react';

export default function BookTimeline(props){
 const Chapters = styled.div`
  img{
    width: 12px;
  }
 `
  // console.log(props.lastEvent.lastEvent.popupId)

  const [thisPopup, selectPopup] = useState()

  const lastpopup = props.last;
  // const currentBook = props.popups[lastpopup].bookid;

  const currentPages = props.pages;



  // console.log("Now Reading: "+props.popups[lastpopup].booktitle)
  // console.log("Chapter: "+props.popups[lastpopup].title)
  console.log("pages: "+currentPages)


// `µˆ∫¨≈´˚ˆø…∆ŒÅ

const bookmarks=[];
const progress=[];
// console.log(props)
if(props.popups){
  Object.keys(props.popups).map((key, id)=>{
      var page = props.popups[key].page;
      // var cat = props.popups[key].category;
      // var interactive = popups[key].interactive;
      bookmarks.push({key:key,x:page,y:0});
      bookmarks.push({x:0,y:0});
      bookmarks.unshift({x:currentPages,y:0});
  })

  Object.keys(bookmarks).map((key, id)=>{
    // console.log(props.popups[lastpopup].page)
    if(bookmarks[key].x <= props.popups[lastpopup].page){
      progress.push(bookmarks[key])
    }
  })
}
  const options = {
    title: {
      text: ''
    },
    credits:{
      enabled:false
    },
    legend:{
      enabled: false
    },
    chart: {
        spacingTop: 0,
        spacingBottom: 50,
        spacingLeft: 10,
        spacingRight: 10,
        height: 140
      },
      xAxis: {
        visible: false,
        min: 0,
        max: currentPages,
        opposite: true
      },
      yAxis:{
        visible: false
      },
      tooltip:{
          enabled: false
      },
    series:[{
      animation: false,
      data:bookmarks,
      type: 'line',
      lineWidth: '10px',
      color: 'lightgrey',
      marker:{
        enabled: true,
      },
      states: {
          hover:{
            enabled: false
          },
          inactive: {
              enabled: false
          },
      },
      dataLabels: {
        y: 35,
        enabled: true,
        useHTML: true,
        allowOverlap: true,
        formatter() {
          // console.log(this.point.blorb)
          var thisClass = '';

          if(this.point.x !=0 && this.point.x !=currentPages){
            if(this.point.x > props.popups[lastpopup].page){
              thisClass= styles.desaturate
            }
          	if (this.point.interactive) {
              return '<div class="'+ thisClass +'"><img src="/img/interactive.svg"></img></div>'
            } else {
            	return '<div class="'+ thisClass +'"><img src="/img/bulb.svg"></img></div>'
            }
          }
        }
      },

      allowPointSelect: true,
      cursor: 'pointer',
      point: {
          // events: {
          //     select: function(events){
          //       events.preventDefault()
          //       console.log(this)
          //       parentCallback(this.options.key)
          //     }
          // }
      },
    },
    {
      cursor: 'pointer',
      allowPointSelect: true,
      point: {
          events: {
              select: function(events){
                events.preventDefault()
                // console.log(this)
                props.parentCallback(this.options.key)
              }
          }
      },
      states: {
          hover:{
            enabled: false
          },
          inactive: {
              enabled: false
          },
      },
      data:progress,
      type: 'line',
      lineWidth: '10px',
      color: '#77C294'
    }
    ]
  }

  return(
  <Chapters>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  </Chapters>

)
}
//
// BookTimeline.getInitialProps = ({query: { popups } }) =>{
//   return { popups }
// }
