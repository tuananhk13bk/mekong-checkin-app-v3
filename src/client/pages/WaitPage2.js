import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// import React Router component
import { Link } from 'react-router-dom'
// Import actions
import {
  changeRfidTagNumTextField, 
  changeErrorMessage,
  submitRfidTagNum,
  clearAllState
} from '../actions'
// Import from Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// Combine multi HOC
import { compose } from 'recompose'
// router
import { withRouter } from 'react-router-dom'
// import APIs
import readValidOrder from '../apis/readValidOrder'
// import components
import RfidForm from '../components/WaitPage2/RfidForm'


const styles = theme => ({
  form: {
    padding: 40,
    width: 300
  },
  button: {
    align:'center'
  }
})

class WaitPage2 extends Component {

  handleSubmit = async() => {
    const {
      // states
      history,
      rfidTagNumOnSearch,
      // actions
      changeErrorMessage,
      submitRfidTagNum
    } = this.props
    if (rfidTagNumOnSearch === '') {
      changeErrorMessage('')
    } else {
      // call API
      const result = await readValidOrder(rfidTagNumOnSearch)
      // check validOrder is null or not
      if (Object.keys(result).length === 0) {
        changeErrorMessage('Thẻ này không hợp lệ!')
      } else {
        changeErrorMessage('')
        submitRfidTagNum(result)

        history.push('/main')
      }
    }
    
    // history.push('/main')
  }

  handleTextFieldOnChange = (value) => {
    const {
      // actions
      changeRfidTagNumTextField,
    } = this.props
    changeRfidTagNumTextField(value)
  }

  render() {
    const { 
      // state
      errorMessage,
      // action
      //styles
      classes
    } = this.props
    return (
      <RfidForm/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.waitPage.errorMessage,
    rfidTagNumOnSearch: state.waitPage.rfidTagNumOnSearch,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeRfidTagNumTextField,
    changeErrorMessage,
    submitRfidTagNum,
    clearAllState
  }, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
  withRouter
)(WaitPage2)