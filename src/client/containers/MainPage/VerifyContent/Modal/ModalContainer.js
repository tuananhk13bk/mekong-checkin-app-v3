import React, { Component } from 'react';
import { connect } from 'react-redux'

import Modal from '../../../../components/MainPage/VerifyContent/Modal/Modal'

class ModalContainer extends Component {
  render() {
    const { dialogIsOpen } = this.props
    return (
      <Modal
        dialogIsOpen={dialogIsOpen}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { dialogIsOpen } = state.dialog
  return {
    dialogIsOpen
  }
}

export default connect(mapStateToProps)(ModalContainer)