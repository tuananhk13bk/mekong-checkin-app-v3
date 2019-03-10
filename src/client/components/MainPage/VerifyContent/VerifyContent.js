import React from 'react';
import HeaderContainer from '../../../containers/MainPage/VerifyContent/HeaderContainer'
import Body from './Body/Body'
import Footer from './Footer'
// import ModalContainer from '../../../containers/MainPage/VerifyContent/ModalContainer'

const VerifyContent = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <HeaderContainer/>
      <Body/>
      <Footer/>
    </div>
  );
};

export default VerifyContent;