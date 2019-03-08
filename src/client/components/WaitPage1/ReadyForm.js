import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
// import assets
import HandAndCard from '../../assets/HandAndCard.png'
import Typography from '@material-ui/core/Typography'
// import from react-router
import { withRouter } from 'react-router'

import { compose } from 'recompose'

const styles = theme => ({
  form: {
    height: 300,
    width: 650,
    background: theme.palette.common.white,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
  },
  root: {
    background: 'linear-gradient(to right, #373b44, #4286f4)',
    minHeight: '100vh',
    minWidth: '100vh',
    margin: 0,
    display: 'flex',
    
  },
  img: {
    display: 'flex',
    width: 236,
    height: 152,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },
  typography: {
    textAlign: 'center',
    color: theme.palette.primary.light,
    fontWeight: 'bold'
  },
  typographyContainer: {
    display: 'flex',
    marginTop: 20
  },
  buttonContainer: {
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  button: {
    background: theme.palette.primary.light,
    color: 'white',
    width: 200,
    height: 40
  },
})

const ReadyForm = ({ classes, history }) => {
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <div className={classes.formContainer}>
        <form className={classes.form}>
          <img src={HandAndCard} alt="HandAndCard" className={classes.img} />
          <div className={classes.typographyContainer}>
            <Typography 
              className={classes.typography}
              variant='h3'>
              !! Sẵn sàng đọc thẻ !!
            </Typography>
            </div>
        </form>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button} 
            variant="outlined"
            onClick={() => history.push('/next')}
          >
            Nhập mã RFID
          </Button>
        </div>  
      </div>
    </div>
  );
};

export default compose(
  withStyles(styles),
  withRouter
)(ReadyForm)