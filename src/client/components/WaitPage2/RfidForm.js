import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
// import from react-router
import { withRouter } from 'react-router'
// Import from Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose } from 'recompose'
// Import actions
import {
  changeRfidTagNumTextField, 
  changeErrorMessage,
  submitRfidTagNum,
  clearAllState
} from '../../actions'
// import APIs
import readValidOrder from '../../apis/readValidOrder'

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

  handleSubmit = async() => {
    
    const {
      // states
      history,
      rfidTagNumOnSearch,
      // actions
      changeErrorMessage,
      submitRfidTagNum
    } = this.props
    
    if (rfidTagNumOnSearch === '') {
      changeErrorMessage('', false)
    } else {
      // call API
      const result = await readValidOrder(rfidTagNumOnSearch)
      // check validOrder is null or not
      if (Object.keys(result).length === 0) {
        changeErrorMessage('Thẻ này không hợp lệ!', true)
      } else {
        changeErrorMessage('', false)
        submitRfidTagNum(result)
        history.push('/main')        
      }
    }
  }

  handleTextFieldOnChange = (value) => {
    const {
      // actions
      changeRfidTagNumTextField,
    } = this.props
    changeRfidTagNumTextField(value)
  }

  render() {
    const {
      classes,
      history,
      // states
      errorMessage,
      rfidTagNumOnSearch,
      textFieldIsError
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
                value={rfidTagNumOnSearch}
                onChange={(event) => this.handleTextFieldOnChange(event.target.value)}
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
              onClick={() => this.handleSubmit()}
            >
              Tìm thẻ
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.waitPage.errorMessage,
    rfidTagNumOnSearch: state.waitPage.rfidTagNumOnSearch,
    textFieldIsError: state.waitPage.textFieldIsError
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeRfidTagNumTextField,
    changeErrorMessage,
    submitRfidTagNum,
    clearAllState
  }, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
  withRouter
)(RfidForm)