import React, { Component } from 'react'
// import from Redux
import { connect } from 'react-redux'
import CustomerPaper from '../../../../components/MainPage/VerifyContent/Body/CustomerPaper'

class CustomerPaperContainer extends Component {
  render() {
    const {
      // states
      customerOnSelect
    } = this.props
    return (
      <div>
        <CustomerPaper
          customerOnSelect={customerOnSelect}
        />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const { customerOnSelect } = state.rfid
  return {
    customerOnSelect
  }
}
export default connect(mapStateToProps, null)(CustomerPaperContainer)