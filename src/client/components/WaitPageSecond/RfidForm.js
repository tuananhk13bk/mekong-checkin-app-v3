import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  form: {
    height: 300,
    width: 650,
    background: 'white',
    borderRadius: 20,
    display: 'flex',
    
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
    height: 40,
  },
  textField: {
  },
  textFieldContainer: {
    width: '80%'
  },
  inputProps: {
    height: 40,
    fontSize: 20
  },
  labelProps: {
    fontSize: 20,
  },
  errorText: {
    color: 'red'
  }
})

class RfidForm extends Component {

  render() {
    const {
      //states
      errorMessage,
      history,
      textFieldIsError,
      rfidCodeOnSearch,
      //actions
      handleSubmit,
      handleTextFieldOnChange,
      // styles
      classes
    } = this.props
    return (
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.formContainer}>
          <form className={classes.form}>
            <div className={classes.textFieldContainer}>
              <TextField
                className={classes.textField}
                InputProps={{ classes: { input: classes.inputProps } }}
                InputLabelProps = {{
                  FormLabelClasses: {
                    root: classes.labelProps
                  }
                }}
                autoFocus
                type="text"
                error={textFieldIsError}
                autoComplete='off'
                variant="outlined"
                margin="dense"
                id="name"
                label="MÃ RFID CODE"
                placeholder="Nhập tại đây"
                fullWidth
                value={rfidCodeOnSearch}
                onChange={(event) => handleTextFieldOnChange(event.target.value)}
              >
              </TextField>
              <br/>
              <Typography className={classes.errorText}>
                {errorMessage}
              </Typography>
            </div>
          </form>
          <div className={classes.buttonContainer}>
            <Button 
              className={classes.button}
              onClick={() => history.push('/')}
            >
              Trở lại
            </Button>
            <Button
              className={classes.button}
              onClick={() => handleSubmit()}
            >
              Tìm thẻ
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(RfidForm)