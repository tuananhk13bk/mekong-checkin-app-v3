import React, { Component } from 'react'
// Import from Redux
import { connect } from 'react-redux'
// Import from React-router
import { withRouter } from 'react-router'
import { compose } from 'recompose'

import Header from '../../../components/MainPage/VerifyContent/Header'

class HeaderContainer extends Component {
  render() {
    const {
      // states
      history,
      headerOnSelect
    } = this.props
    return (
      <Header
        history={history}
        headerOnSelect={headerOnSelect}
      />

    )
  }
}

const mapStateToProps = (state) => {
  const { headerOnSelect } = state.rfid
  return {
    headerOnSelect
  }
}

export default compose(
  connect(mapStateToProps),
  withRouter
)(HeaderContainer)
