import React, { Component, useState } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
const timestamps = [];

export default function DayTimeline(props){

console.log(props.popups)


  const events = props.events;

//Just Date
const dates = [];
const timestamps = [];
const latest = new Date(dates[dates.length - 1]);
const lastdate = latest.getFullYear()+"/"+(latest.getMonth()+1)+"/"+latest.getDate();

const [selectDate, setDate] = useState(lastdate)


 if(props.events != undefined && props.popups != undefined){

Object.keys(events).map((key,id) =>{
  var date = new Date(events[key].timestamp);
  var dateTrunc = Date.parse(date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate());
  if(!dates.includes(dateTrunc)){dates.push(dateTrunc)};
})
console.log(dates)

//all timestamps

  Object.keys(events).map((key,id) =>{
    if(events[key].action=='PopupShown'){
      var stamp = new Date(events[key].timestamp);
      var stampTrunc = stamp.getFullYear()+"/"+(stamp.getMonth()+1)+"/"+stamp.getDate();
      console.log(!props.popups[events[key].popupId] ? `` : props.popups[events[key].popupId]['popup type'])
      let interactive =!props.popups[events[key].popupId] ? ``
      : props.popups[events[key].popupId]['popup type'] == 'interactive' ? true : false;
      if(stampTrunc == selectDate ) {timestamps.push({x:stamp,y:0, interactive:interactive, lp:events[key].popupId})}
    }
  })

}


  // if(props.events != undefined && props.popups != undefined){
  //   (props.events).map(v=>{
  //     if(v.action=='PopupShown'){
  //       console.log(props.popups[v.popupId]['popup type'])
  //       let interactive = props.popups[v.popupId]['popup type'] == 'interactive' ? true : false;
  //       timestamps.push({x:v.timestamp, y:0, id:v.popupId, interactive:interactive})
  //     }
  //   })
  // }


  const options = {
    title: {
      text: ''
    },
    xAxis: {
      type: 'datetime',
      lineWidth: 3,
      opposite: true,
    },
    yAxis:{
      visible: false,
    },
    legend:{
      enabled: false
    },
    credits:{
      enabled:false
    },
    chart: {
        spacingBottom: 140,
        spacingTop: 40,
        spacingLeft: 10,
        spacingRight: 10,
        height: 220,
      },
      tooltip:{
          enabled: false
      },
    series:[{
      dataLabels: {
       offset:300,
        enabled: true,
        useHTML: true,
        allowOverlap: false,
        formatter() {
          // console.log(this.point.blorb)
          var thisClass = '';

            if (this.point.interactive) {
              return '<div class="pop"><img src="/img/interactive.svg"><span class="cat">'+ this.point.lp +'</span></div>'
            } else {
              return '<div class="pop"><img src="/img/bulb.svg"><span class="cat">'+ this.point.lp +'</span></div>'
            }
          }
      },      lineWidth: '4px',
      lineWidthPlus: '4px',
      color: 'black',
      allowPointSelect: true,
      states: {
          hover:{
            enabled: false
          },
          inactive: {
              enabled: false
          },
      },
      point: {
          events: {
              click: function() {
                  this.series.chart.update({
                      tooltip: {
                          enabled: false
                      }
                  });
              },
              select: function(events){
                console.log(this.lp)
                events.preventDefault()
                const poppers = this.lp
                props.parentCallback(poppers)
              }
          }
      },
      data:timestamps
    }]
  }


return (
  <div>
    {dates.map((thisDate,index) =>{
    var myDate = new Date(thisDate)

    console.log(timestamps)
    return <button key={index} onClick={() => {

      setDate(myDate.getFullYear()+"/"+(myDate.getMonth()+1)+"/"+myDate.getDate())

        const someevent = Object.keys(events)[Object.keys(events).length-1];
         // lastevent = events[someevent].popupId;
    }}>{
        myDate.getFullYear()+"/"+(myDate.getMonth()+1)+"/"+myDate.getDate()
      }
    </button>
     })}
     <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  </div>
)
  }
