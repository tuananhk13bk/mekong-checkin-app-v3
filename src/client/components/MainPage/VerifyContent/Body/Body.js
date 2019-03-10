import React from 'react';
import Grid from '@material-ui/core/Grid'
import CustomerPaperContainer from '../../../../containers/MainPage/VerifyContent/Body/CustomerPaperContainer'
import DriverPaperContainer from '../../../../containers/MainPage/VerifyContent/Body/DriverPaperContainer'
import TransCoPaperContainer from '../../../../containers/MainPage/VerifyContent/Body/TransCoPaperContainer'
import ModalButtonContainer from '../../../../containers/MainPage/VerifyContent/Modal/ModalButtonContainer'
import ModalContainer from '../../../../containers/MainPage/VerifyContent/Modal/ModalContainer'

const Body = () => {
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={6} lg={5}  style={{paddingBottom: 0}}>
          <CustomerPaperContainer />
          <DriverPaperContainer/>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={7} style={{paddingBottom: 0}}>
          <TransCoPaperContainer/>
          <ModalButtonContainer/>
        </Grid>
      </Grid>
      <ModalContainer/>
    </div>
  );
};

export default Body;