import React from 'react';
import moment from 'moment'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    marginTop: 40,
    marginBottom: 20
  },
  text: {
    textAlign: 'right'
  }
})

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography className={classes.text}>
        {`Copyright @ ${moment().format('YYYY')}, Create by PTT Company`}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Footer);