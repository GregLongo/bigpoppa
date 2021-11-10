import React, { Component, useState } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class DayTimeline extends React.Component {
  constructor() {
    super();
    this.dates = [];
    this.timestamps = [];


    this.state = {
      selectDate: null
    }
  }
  componentDidMount(){
      console.log(this.props.popups)
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.events != prevProps.events){
      // console.log("componentDidUpdate", this.props.popups);
    const events = this.props.events;
    if (this.props.events != undefined && this.props.popups != undefined) {
      Object.keys(events).map((key, id) => {
        var date = new Date(events[key].timestamp);
        var dateTrunc = Date.parse(date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate());
        if (!this.dates.includes(dateTrunc)) { this.dates.push(dateTrunc) };
      })
      console.log(events)

      //all timestamps

      Object.keys(events).map((key, id) => {
        if (events[key].action == 'PopupShown') {
          var stamp = new Date(events[key].timestamp);
          var stampTrunc = stamp.getFullYear() + "/" + (stamp.getMonth() + 1) + "/" + stamp.getDate();
          // console.log(!this.props.popups[events[key].popupId] ? `` : this.props.popups[events[key].popupId]['popup type'])

          let category = !this.props.popups[events[key].popupId] ? ``
            : this.props.popups[events[key].popupId].primary[0];

          let interactive = !this.props.popups[events[key].popupId] ? ``
            : this.props.popups[events[key].popupId]['popup type'] == 'interactive' ? true : false;
          if (stampTrunc == this.state.selectDate) { this.timestamps.push({ x: stamp, y: 0, interactive:interactive, cat:category, lp: events[key].popupId }) }
        }
      });
    }
    if (!!this.dates && this.dates.length > 0) {
      //Just Date
      const latest = new Date(this.dates[this.dates.length - 1]);
      const lastdate = latest.getFullYear() + "/" + (latest.getMonth() + 1) + "/" + latest.getDate();

      this.setState({
        selectDate: lastdate
      });
    }
  }
}
    render() {
      console.log(this.state.selectDate)
    this.options = {
      title: {
        text: ''
      },
      xAxis: {
        type: 'datetime',
        lineWidth: 3,
        opposite: true,
      },
      yAxis: {
        visible: false,
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      chart: {
        spacingBottom: 140,
        spacingTop: 40,
        spacingLeft: 10,
        spacingRight: 10,
        height: 220,
      },
      tooltip: {
        enabled: false
      },
      series: [{
        dataLabels: {
          offset: 300,
          enabled: true,
          useHTML: true,
          allowOverlap: false,
          formatter() {
            // console.log(this.point.blorb)
            var thisClass = '';

            if (this.point.interactive) {
              return '<div class="pop"><img src="/img/interactive.svg"><span class="cat">' + this.point.cat + '</span></div>'
            } else {
              return '<div class="pop"><img src="/img/interactive.svg"><span class="cat">' + this.point.cat + '</span></div>'
            }
          }
        }, lineWidth: '4px',
        lineWidthPlus: '4px',
        color: 'black',
        allowPointSelect: true,
        states: {
          hover: {
            enabled: false
          },
          inactive: {
            enabled: false
          },
        },
        point: {
          events: {
            click: function () {
              this.series.chart.update({
                tooltip: {
                  enabled: false
                }
              });
            },
            select: function (events) {
              console.log(this.lp)
              events.preventDefault()
              const poppers = this.lp
              props.parentCallback(poppers)
            }
          }
        },
        data: this.timestamps
      }]
    }

    return (
      <div>
        {this.dates.map((thisDate, index) => {
          var myDate = new Date(thisDate)

          console.log(this.timestamps)
          return <button key={index} onClick={() => {
            this.setState({
              selectDate: myDate.getFullYear() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getDate()
            })
            const someevent = Object.keys(this.props.events)[Object.keys(this.props.events).length - 1];
            // lastevent = events[someevent].popupId;
          }}>{
              myDate.getFullYear() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getDate()
            }
          </button>
        })
        }
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={this.options}
          />
        </div>
      </div >
    )
  }
}
