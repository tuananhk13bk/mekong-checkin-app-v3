import React from 'react';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import CustomerPaperContainer from '../../../../containers/MainPage/VerifyContent/Body/CustomerPaperContainer'
import DriverPaperContainer from '../../../../containers/MainPage/VerifyContent/Body/DriverPaperContainer'
import TransCoPaperContainer from '../../../../containers/MainPage/VerifyContent/Body/TransCoPaperContainer'
import ModalButtonContainer from '../../../../containers/MainPage/VerifyContent/Modal/ModalButtonContainer'
import ModalContainer from '../../../../containers/MainPage/VerifyContent/Modal/ModalContainer'


const styles = theme => ({
  noPadding: {
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    height: '100%'
  },
  mainGrid: {
    display: 'flex',
  }
})

const Body = ({ classes}) => {
  return (
    <div>
      <Grid container spacing={24} className={classes.mainGrid}>
        <Grid item xs={12} sm={6} md={6} lg={5}  className={classes.noPadding}>
          <CustomerPaperContainer />
          <DriverPaperContainer/>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={7} className={classes.noPadding}>
          <TransCoPaperContainer/>
          <ModalButtonContainer/>
        </Grid>
      </Grid>
      <ModalContainer/>
    </div>
  );
};

export default withStyles(styles)(Body);