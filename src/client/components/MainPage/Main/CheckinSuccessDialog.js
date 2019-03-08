import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography';
import CheckCircle from '@material-ui/icons/CheckCircle'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
import { connect } from 'react-redux'
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
  }
})


class CheckinSuccessDialog extends Component {

  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 200);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 10 });
  };

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
              variant="static"
              value={this.state.completed}
            />
            <CheckCircle
              className={classes.successIcon}
            />
            <Typography
              variant="h3"
              color="primary"
            >
              Checkin thành công!
            </Typography>
          </div>
        </form>
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dialogIsOpen: state.dialog.dialogIsOpen
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(CheckinSuccessDialog)