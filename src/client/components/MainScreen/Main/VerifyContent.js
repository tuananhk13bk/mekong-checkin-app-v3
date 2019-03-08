import React, { Component } from 'react'
// import from @material-ui
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AccountBox from '@material-ui/icons/AccountBox'
import CreditCard from '@material-ui/icons/CreditCard'
import Create from '@material-ui/icons/Create'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import CustomerPaper from './CustomerPaper'
import DriverPaper from './DriverPaper'
import TransportPaper from './TransportPaper'
// Import actions
import { receiveDataFromDb } from '../../../actions'
// Import from Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// Import from React-router
import { Link } from 'react-router-dom'
// import APIs
import updateOrderStatus from '../../../apis/updateOrderStatus'

class VerifyContent extends Component {

  render() {
    const { rfidCodeOnFind, orderOnSelect } = this.props
    return (
      <div>
        <Grid container style={{marginBottom: 24}}>
          <Grid item sm={6}>
            <Typography variant='h5' style={{verticalAlign: "text-bottom"}}>
              Xác thực thông tin
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="subtitle2" align='right' style={{verticalAlign: 'bottom'}} >
              {orderOnSelect.driverFullName}
              <AccountBox style={{verticalAlign: 'bottom'}} />
            </Typography>
          </Grid>
        </Grid>
        <div>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            style={{marginBottom: 24}}
            onClick={() => {
              const updateValue = {
                status: 'In progress'
              }
              updateOrderStatus(orderOnSelect.workOrderCode, updateValue)
            }}
          >
            Hoàn thành
          </Button>
          
          <Typography variant="subtitle1" style={{marginBottom: 24}}>
            <Chip
              label={orderOnSelect.workOrderCode}
              avatar={
                <Avatar>
                  <Create />
                </Avatar>
              }
              style={{marginRight: 20}}
            />
            <Chip
              label={rfidCodeOnFind}
              avatar={
                <Avatar>
                  <CreditCard />
                </Avatar>
              }
            />
          </Typography>
        </div>
        <Grid container style={{flexGrow: 1}} spacing={24} >
          <Grid item xs={12} sm={5} >
            <CustomerPaper />
            <DriverPaper />
          </Grid>
          <Grid item xs={12} sm={7}>
            <TransportPaper />
          </Grid>
        </Grid>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rfidCodeOnFind: state.rfidCodeReducer.rfidCodeOnFind,
    orderOnSelect: state.rfidCodeReducer.orderOnSelect
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({receiveDataFromDb}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyContent)