import React, { Component, Fragment } from 'react'
// import from Redux
import { connect } from 'react-redux'

import DriverPaper from '../../../../components/MainPage/VerifyContent/Body/DriverPaper'

class DriverPaperContainer extends Component {
  render() {
    const {
      // states
      driverOnSelect
    } = this.props
    return (
      <div>
        <DriverPaper
          driverOnSelect={driverOnSelect}
        />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const {
    driverOnSelect
  } = state.rfid
  return {
    driverOnSelect
  }
}
export default connect(mapStateToProps, null)(DriverPaperContainer)