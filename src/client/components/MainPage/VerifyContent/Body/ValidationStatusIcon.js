import React, { Component } from 'react'
// import APIs
import DateCompareToCurrent from '../../../../utils/DateCompareToCurrent'
// import material-icons
import Warning from '@material-ui/icons/Warning'
import CheckCircle from '@material-ui/icons/CheckCircle'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  danger: {
    color: theme.palette.error.main
  },
  warning: {
    color: theme.palette.warning.light
  },
  success: {
    color: theme.palette.success.light
  }
})

class ValidationStatusIcon extends Component {
  render() {
    const { inputDate, classes } = this.props
    const dateCompareToCurrent = new DateCompareToCurrent(inputDate)
    const validationStatus = dateCompareToCurrent.compareToCurrent()
    let colorClass
    if (validationStatus === 'WARNING') {
      // yellow
      colorClass = 'warning'
    }
    else if (validationStatus === 'EXPIRED') {
      colorClass = 'danger'
    } else {
      colorClass = 'success'
    }
    return (
      validationStatus === 'VALID'
        ? <CheckCircle className={classes[`${colorClass}`]} />
        : <Warning className={classes[`${colorClass}`]} />
    )
  }
}

export default withStyles(styles)(ValidationStatusIcon)