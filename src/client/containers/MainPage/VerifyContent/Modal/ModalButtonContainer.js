import React, { Component } from 'react'
import moment from 'moment'
// Import from Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
// Import actions
import {
  toggleDialog
} from '../../../../actions'
// import API
import { updateOrderStatus, createRfidEvent } from '../../../../apis'
// import constants
import { AUTHENTICATED, IN_PROGRESS, COMPLETED } from '../../../../constants/orderStatusId'

import ModalButton from '../../../../components/MainPage/VerifyContent/Modal/ModalButton'

class ModalButtonContainer extends Component {

  handleSubmitCheckin = async() => {
    const {
      // states
      history,
      statusId,
      workOrderCode,
      rfidCode,
      // actions
      toggleDialog
    } = this.props
    toggleDialog()
    console.log(workOrderCode, statusId)
    // update order status to db
    if (statusId === AUTHENTICATED) {
      await updateOrderStatus(workOrderCode, IN_PROGRESS)
    }
    if (statusId === IN_PROGRESS) {
      await updateOrderStatus(workOrderCode, COMPLETED)
    }

    // create rfid event in db
    const todayDate = moment().format('YYYY-MM-DD')
    const rfidReaderCode = 1
    await createRfidEvent(rfidCode, rfidReaderCode, todayDate)

    // back to previous page
    setTimeout(() => {
      toggleDialog()
    }, 1500);
    setTimeout(() => {
      history.push('/')
    }, 2000);
  }

  render() {
    const {
      // state
      statusId,
      // styles
      classes
    } = this.props
    return (
      <div>
        <ModalButton 
          //state
          statusId={statusId}
          // actions
          handleSubmitCheckin={this.handleSubmitCheckin}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { statusId, workOrderCode, rfidCode } = state.rfid.headerOnSelect
  return {
    statusId,
    workOrderCode,
    rfidCode
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleDialog
  }, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ModalButtonContainer)