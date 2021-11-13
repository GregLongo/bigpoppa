import React, { Component } from 'react';
import {getPopups} from '../store/actions/popupsAction'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

export class PopupsProvider extends Component {
  componentDidMount() {
    this.props.onGetPopups();
  }

  shouldComponentUpdate(newProps, newState){
    // console.log(this.props.popup)

    return newProps.popupsVal != this.props.popupsVal;
  }

  render() {
    // console.log(this.props.popupsVal)

    return (
      <div>
        <div>{React.cloneElement(this.props.children, {...this.props, popups:this.props.popupsVal})}</div>
      </div>)
  }
}

PopupsProvider.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  popupsVal: PropTypes.object,
  onGetPopups: PropTypes.func
};

PopupsProvider.defaultProps = {
}


const mapStateToProps = (state) => ({
  isLoading: state.popupsList.isLoading,
  error: state.popupsList.error,
  popupsVal: state.popupsList.popupsVal,
});

const mapDispatchToProps = (dispatch) => ({
  onGetPopups: () => dispatch(getPopups())
})

export default connect(mapStateToProps, mapDispatchToProps)(PopupsProvider);
