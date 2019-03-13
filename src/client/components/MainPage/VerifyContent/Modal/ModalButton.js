import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
// import constants
import { AUTHENTICATED, IN_PROGRESS } from '../../../../constants/orderStatusId'

const styles = theme => ({
  button: {
    width: '100%',
    flex: 1,
  }
})

class ModalButton extends Component {

  render() {
    const {
      // state
      statusId,
      // actions
      handleSubmitCheckin,
      // styles
      classes
    } = this.props
    return (
      <div>
        <Button
          className={classes.button}
          onClick={() => handleSubmitCheckin()}
        >
          <Typography
            variant="h5"
            color="primary"
          >
            {statusId === AUTHENTICATED
              ? 'Check-in...'
              : 'Check-out...'
            }
          </Typography>
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(ModalButton)