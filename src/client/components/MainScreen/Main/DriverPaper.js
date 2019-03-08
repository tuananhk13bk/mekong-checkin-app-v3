import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
// import from Redux
import { connect } from 'react-redux'
// combine multi HOC
import { compose } from 'recompose'

const styles = {
  paper: {
    padding: 15,
    marginTop: 24,
    height: 200
  }
}

class DriverPaper extends Component {
  render() {
    const { classes, orderOnSelect } = this.props
    return (
      <Paper className={classes.paper} >
        <Grid container >
          <Grid item xs={5}>
            picture
          </Grid>
          <Grid item xs={7}>
            <Typography variant="subtitle2" >
              <strong>{orderOnSelect.driverFullName}</strong>
              <br />
              CMND: {' '} {orderOnSelect.driverIdNum}
              <br />
              Ngày hết hạn: {' '} {orderOnSelect.driverIdExpdate}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="subtitle2">
          Bằng lái số: {orderOnSelect.driverLicNum}
          <br />
          Ngày hết hạn: {orderOnSelect.driverLicExpdate}
          <br />
          Giấy chứng nhận huấn luyện nghiệp vụ 
          phòng cháy chữa cháy: {orderOnSelect.fireFightingCertNum}
          <br />
          Ngày hết hạn: {orderOnSelect.fireFightingExpdate}
        </Typography>
      </Paper>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    orderOnSelect: state.rfidCodeReducer.orderOnSelect
  }
}
export default compose(
  connect(mapStateToProps, null),
  withStyles(styles)
)(DriverPaper)