import React, { Component } from 'react';
import {getTimestamps} from '../store/actions/timestampsAction'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
const timestamps = [];

export class DayTimeline extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.onGetTimestamps();
  // (this.props.timestampsVal.children).map(v=>{
  //   timestamps.push({x:v.timestamp, y:0})
  // })
  console.log(this.props)

  }

  shouldComponentUpdate(newProps, newState){
    return newProps.timestampsVal != this.props.timestampsVal;
    console.log(this.props)

  }
  componentDidUpdate(){
    // if(this.props.timestampsVal){
    //   // console.log(this.props.timestampsVal.children)
    // (this.props.timestampsVal.children).map(v=>{
    //   timestamps.push({x:v.timestamp, y:0})
    // })}
    // console.log(timestamps)
  }

  render() {
    console.log(this.props.timestampsVal.children == undefined ? `baka` : this.props.timestampsVal.children)

    if(this.props.timestampsVal.children != undefined){
      (this.props.timestampsVal.children).map(v=>{


        if(v.action=='PopupShown'){
          // let interactive = this.props.popups[v.popupId].popuptype == 'interactive' ? true : false;
          timestamps.push({x:v.timestamp, y:0, id:v.popupId})
        }
      })
    }

  //
  //   if(!this.props.isLoading && !this.props.error && timestamps.length >  0 ){
  //     // console.log(this.props.timestampsVal.children)
  //   (this.props.timestampsVal.children).map(v=>{
  //     timestamps.push({x:v.timestamp, y:0})
  //   })
  // }

    console.log(timestamps)
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
                  return '<div class="pop"><img src="/img/interactive.svg"><span class="cat">'+ this.point.cat +'</span></div>'
                } else {
                	return '<div class="pop"><img src="/img/bulb.svg"><span class="cat">'+ this.point.cat +'</span></div>'
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
              // events: {
              //     click: function() {
              //         this.series.chart.update({
              //             tooltip: {
              //                 enabled: false
              //             }
              //         });
              //     },
              //     select: function(events){
              //       events.preventDefault()
              //       // console.log(events)
              //       const poppers = students[student].timestamps['event'+((this.index)+1)].id
              //       // selectPopupTitle(popups[poppers].title)
              //       // selectPopupCategory(popups[poppers].category)
              //       // selectPopupText(popups[poppers].text)
              //       props.parentCallback(poppers)
              //     }
              // }
          },
          data:timestamps
        }]
      }


    return (
      <div>
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>
      </div>)
  }
}

DayTimeline.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  timestampsVal: PropTypes.object,
  onGetTimestamps: PropTypes.func
};

DayTimeline.defaultProps = {
}


const mapStateToProps = (state) => ({
  isLoading: state.timestampsList.isLoading,
  error: state.timestampsList.error,
  timestampsVal: state.timestampsList.timestampsVal,
});

const mapDispatchToProps = (dispatch) => ({
  onGetTimestamps: () => dispatch(getTimestamps())
})

export default connect(mapStateToProps, mapDispatchToProps)(DayTimeline);
