import React, { Component } from 'react'
// import from @material-ui
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AccountBox from '@material-ui/icons/AccountBox'
import Create from '@material-ui/icons/Create'
import CreditCard from '@material-ui/icons/CreditCard'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
  root: {
  },
  accountIcon: {
    color: theme.palette.primary.light,
    width: 40,
    height: 40
  },
  accountText: {
    color: theme.palette.primary.light
  },
  chip: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.palette.primary.light,
  },
  grid: {
    marginBottom: 10
  },
  headerTitle: {
    color: theme.palette.primary.light
  },
  accountSpan: {
    display: 'inline-block', 
    verticalAlign: 'middle', 
    marginLeft: 10
  },
  button: {
    background: theme.palette.primary.light,
    color: 'white',
    width: 200,
    height: 40,
    marginBottom: 24
  },
})

class Header extends Component {

  render() {
    const {
      // states
      history,
      headerOnSelect,
      // styles
      classes
    } = this.props
    
    return (
      <div
        className={classes.root}
      >
        <Grid container 
          className={classes.grid}
          alignItems="center"
        >
          <Grid item sm={8}>
            <Typography 
              variant='h5'
              className={classes.headerTitle}
            >
              Xác thực thông tin
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography 
              align="right"
              variant="subtitle1"
              className={classes.accountText}
            >
              {headerOnSelect.driverFullName}
              <span
                className={classes.accountSpan}
              >
                <AccountBox className={classes.accountIcon} />
              </span>
            </Typography>
          </Grid>
        </Grid>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => history.push('/')}
        >
          Trở lại
        </Button>
        
        <Typography variant="subtitle1" style={{marginBottom: 24}}>
          <Chip
            className={classes.chip}
            label={headerOnSelect.workOrderCode}
            avatar={
              <Avatar>
                <Create />
              </Avatar>
            }
            style={{marginRight: 20}}
          />
          <Chip
            className={classes.chip}
            label={headerOnSelect.rfidSysNum}
            avatar={
              <Avatar>
                <CreditCard />
              </Avatar>
            }
            style={{marginRight: 20}}
          />
        </Typography>
      </div>
      
    )
  }
}

export default withStyles(styles)(Header)