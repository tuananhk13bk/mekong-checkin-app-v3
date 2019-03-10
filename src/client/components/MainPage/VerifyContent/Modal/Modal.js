import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography';
import CheckCircle from '@material-ui/icons/CheckCircle'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  successIcon: {
    color: theme.palette.success.light,
    width: 200,
    height: 200
  },
  form: {
    height: 300,
    width: 650,
    
  },
  formDiv: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    alignItems: 'center'
  },
  progress: {
    color: theme.palette.primary.light,
  }
})


class Modal extends Component {

  render() {
    const { classes, dialogIsOpen } = this.props
    return (
      <Dialog 
        open={dialogIsOpen}
      >
        <form>
          <div className={classes.formDiv}>
            <CircularProgress
              className={classes.progress}
              size={100}
            />
            {/* <CheckCircle
              className={classes.successIcon}
            /> */}
            <Typography
              variant="h3"
              color="primary"
            >
              Loading...
            </Typography>
          </div>
        </form>
      </Dialog>
    );
  }
}

export default withStyles(styles)(Modal)