//
// import React, {useEffect} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import {getTimestamps} from '../store/actions/timestampsAction'
//
// const DayTimeline = () => {
//     const dispatch = useDispatch()
//     const timestampsList = useSelector(state => state.timestampsList)
//     const {loading, error, timestampsVal} = timestampsList
//     const timestamps = [];
//
//     useEffect(() => {
//         dispatch(getTimestamps())
//       }, [dispatch])
//
//         Object.keys(timestampsVal).map(v=>{
//           timestamps.push(timestampsVal[v].timestamp)
//         })
//     return (
//         <>
//           {loading ? "Loading..." : error ? error.message :
//           <div>
//             <div>{timestamps.map(t=>{return <div>{t}</div>})}</div>
//           </div>
//           }
//         </>
//     )
// }

import React, { Component } from 'react';
import {getTimestamps} from '../store/actions/timestampsAction'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
const timestamps = [];

export class DayTimeline extends Component {
  componentDidMount() {
    this.props.onGetTimestamps();
  }

  shouldComponentUpdate(newProps, newState){
    return newProps.timestampsVal != this.props.timestampsVal;

  }
  componentDidUpdate(){
    if(this.props.timestampsVal){
      // console.log(this.props.timestampsVal.children)
    (this.props.timestampsVal.children).map(v=>{
      timestamps.push(v.timestamp)
    })}
    console.log(timestamps)
  }

  render() {

    // console.log(this.props.timestampsVal.children)

    return this.props.loading ? "Loading..." : this.props.error ? this.props.error.message :
      <div>
        <div>

        </div>
      </div>
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
