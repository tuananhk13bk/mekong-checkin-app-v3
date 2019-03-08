import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
// Import from Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
// Import actions
import {
  toggleDialog
} from '../../../actions'


const styles = theme => ({
  button: {
    width: '100%',
    height: 60
  }
})

class CheckinButton extends Component {

  handleSubmitCheckin = () => {
    const { toggleDialog, history } = this.props
    toggleDialog()
    setTimeout(() => {
      toggleDialog()
    }, 1500);
    setTimeout(() => {
      history.push('/')
    }, 1500);
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Button
          className={classes.button}
          onClick={() => this.handleSubmitCheckin()}
        >
          <Typography
            variant="h5"
            color="primary"
          >
            Check-in...
          </Typography>
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleDialog
  }, dispatch)
}

export default compose(
  connect(null, mapDispatchToProps),
  withRouter,
  withStyles(styles)
)(CheckinButton)