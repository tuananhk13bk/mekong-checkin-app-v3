import React, { Component } from 'react'
// Import from Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import from @material-ui
import Grid from '@material-ui/core/Grid'
import CustomerPaper from './CustomerPaper'
import DriverPaper from './DriverPaper'
import TransportPaper from './TransportPaper'
import Header from './Header'
import CheckinButton from './CheckinButton'
// import actions
import {
  clearAllState
} from '../../../actions/index'
import CheckinSuccessDialog from './CheckinSuccessDialog';

class VerifyContent extends Component {

  componentWillUnmount = () => {
    const { clearAllState } = this.props
    clearAllState()
  }

  render() {
    return (
      <div>
        <Header />
        <Grid container style={{flexGrow: 1}} spacing={24} >
          <Grid item xs={12} sm={6} md={6} lg={5}>
            <CustomerPaper />
            <DriverPaper />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={7}>
            <TransportPaper />
            <CheckinButton />
          </Grid>
        </Grid>
        <CheckinSuccessDialog/>
      </div>
      
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clearAllState
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(VerifyContent)