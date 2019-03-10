import React, { Component, Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
// Import images
import Transport from '../../../../assets/img/Transport.png'
// import child components
import ValidationStatusIcon from './ValidationStatusIcon'

const styles = theme => ({
  paper: {
    padding: 15,
    height: '80vh'
  },
  warningIcon: {
    color: theme.palette.secondary.light,
    width: 30,
    height: 30
  },
  transportImg: {
    width: 250,
    height: 150,
    marginBottom: 10
  },
  grid: {
    verticalAlign: 'middle'
  },
  typographyBold: {
    fontWeight: 'bold',
    color: theme.palette.primary.light
  },
  typography: {
    color: theme.palette.primary.light
  },
  validationStatusIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: 10
  }
})

class TransportPaper extends Component {
  render() {
    const {
      // states
      transCoOnSelect,
      // styles
      classes
    } = this.props
    
    const certificateExpDateList = [
      ['Chứng nhận đăng kí xe', transCoOnSelect.vehicleRegCertExpdate],
      ['Giấy phép vận chuyển hóa chất', transCoOnSelect.chemicalTransLicExpdate],
      ['Bảo hiểm xe', transCoOnSelect.assuranceExpdate],
      ['Đăng kiểm xe', transCoOnSelect.vehicleInspectationCertExpdate]
    ]
    return (
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item sm={12} md={12} lg={6}>
            <img src={Transport} alt="Logo" className={classes.transportImg} />
          </Grid>
          <Grid item sm={12} md={12} lg={6}>
            <Typography
              className={classes.typographyBold}
            >
              {transCoOnSelect.transCoFullName ? transCoOnSelect.transCoFullName : 'CT van tai Toan Cau'}
            </Typography>
            <hr/>
            <Typography
              className={classes.typography}
            >
              {transCoOnSelect.plateNum ? transCoOnSelect.plateNum : '54S - 55577'}
            </Typography>
            <hr/>
            <Typography
              className={classes.typography}
            >
              Chủ xe: {transCoOnSelect.ownerFullName}
            </Typography>
          </Grid>
        </Grid>
        {certificateExpDateList.map(([title, date]) => {
          return (
            <Fragment key={title}>
              <hr/>
              <Grid 
                container
                alignItems="center"
              >
                <Grid item md={7} sm={7}>
                  <Typography
                    className={classes.typography}
                  >
                    {title}
                  </Typography>
                </Grid>
                <Grid item md={1} sm={1}>
                  <Typography
                    className={classes.typography}
                    align="center"
                  >
                    <ValidationStatusIcon inputDate={date} />
                  </Typography>
                </Grid>
                <Grid item md={4} sm={4}>
                  <Typography
                    className={classes.typography}
                    align="center"
                  >
                    {date}
                  </Typography>
                </Grid>
              </Grid>
            </Fragment>
          )
        })}
        
      </Paper>
    )
  }
}

export default withStyles(styles)(TransportPaper)