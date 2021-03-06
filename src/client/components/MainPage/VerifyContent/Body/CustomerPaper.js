import React, { Component, Fragment } from 'react'
// import from @material-ui
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
// Import logo
import Logo from '../../../../assets/img/Logo.png'

const styles = theme => ({
  paper: {
    padding: 15,
    height: 'auto',
  },
  typographyBold: {
    fontWeight: 'bold',
    color: theme.palette.primary.light
  },
  typography: {
    color: theme.palette.primary.light
  },
  companyLogo: {
    width: 50,
    height: 50
  }
})

class CustomerPaper extends Component {
  render() {
    const {
      // states
      customerOnSelect,
      // styles
      classes
    } = this.props
    const customerPaperList = [
      ['Mặt hàng', customerOnSelect.productFullName],
      ['Số lượng', `${customerOnSelect.amount} ${customerOnSelect.unit}`],
      ['Loại hàng', customerOnSelect.productType],
      ['Trạng thái đơn hàng', customerOnSelect.status]
    ]
    return (
      <Paper className={classes.paper} >
        <Grid container>
          <Grid item sm={3}>
            <img src={Logo} alt="Logo" className={classes.companyLogo}/>
          </Grid>
          <Grid item sm={9}>
            <Typography 
              className={classes.typographyBold}
              variant="subtitle2"
            >
              {customerOnSelect.cusFullName}
            </Typography> 
          </Grid>
        </Grid>
        {customerPaperList.map(element => (
          <Fragment key={element[0]}>
            <hr/>
            <Grid container>
              <Grid item sm={6} xs={6}>
                <Typography 
                  className={classes.typography}
                  variant="subtitle2"
                >
                  {element[0]}
                </Typography>
              </Grid>
              <Grid item sm={6} xs={6}>
                <Typography 
                  className={classes.typography}
                  variant="subtitle2"
                >
                  {element[1]}
                </Typography>
              </Grid>
            </Grid>
          </Fragment>
        ))}
      </Paper>
    )
  }

}

export default withStyles(styles)(CustomerPaper)