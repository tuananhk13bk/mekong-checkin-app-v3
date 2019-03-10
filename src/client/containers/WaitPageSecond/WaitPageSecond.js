import React, { Component } from 'react';
import moment from 'moment'
// Import actions
import {
  changeRfidCodeInTextField, 
  changeErrorMessage,
  submitRfidCode,
  clearAllState,
} from '../../actions'
// Import from Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// Combine multi HOC
import { compose } from 'recompose'
// router
import { withRouter } from 'react-router-dom'
// import APIs
import { readValidOrderByManual } from '../../apis'
// import components
import RfidForm from '../../components/WaitPageSecond/RfidForm'
// import constants
import { AUTHENTICATED, IN_PROGRESS } from '../../constants/orderStatusId'

class WaitPageSecond extends Component {

  handleSubmit = async() => {
    const {
      // states
      history,
      rfidCodeOnSearch,
      // actions
      changeErrorMessage,
      submitRfidCode,
    } = this.props

    if (rfidCodeOnSearch === '') {
      changeErrorMessage('', false)
    } else {
      // call API
      const todayDate = moment().format('YYYY-MM-DD')
      const result = await readValidOrderByManual(
        AUTHENTICATED, IN_PROGRESS, rfidCodeOnSearch, todayDate
      )
      
      // check validOrder is null or not
      if (Object.keys(result).length === 0) {
        changeErrorMessage('Thẻ này không hợp lệ!', true)
      } else {
        changeErrorMessage('', false)
        submitRfidCode(result)
        history.push('/main')
      }
    }
  }

  handleTextFieldOnChange = (value) => {
    const {
      // actions
      changeRfidCodeInTextField,
    } = this.props
    changeRfidCodeInTextField(value)
  }

  render() {
    const { 
      // state
      errorMessage,
      textFieldIsError,
      rfidCodeOnSearch
    } = this.props
    return (
      <RfidForm
        // states
        errorMessage={errorMessage}
        history={history}
        textFieldIsError={textFieldIsError}
        rfidCodeOnSearch={rfidCodeOnSearch}
        //actions
        handleSubmit={this.handleSubmit}
        handleTextFieldOnChange={this.handleTextFieldOnChange}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.waitPage.errorMessage,
    rfidCodeOnSearch: state.waitPage.rfidCodeOnSearch,
    textFieldIsError: state.waitPage.textFieldIsError
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeRfidCodeInTextField,
    changeErrorMessage,
    submitRfidCode,
    clearAllState,
  }, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(WaitPageSecond)