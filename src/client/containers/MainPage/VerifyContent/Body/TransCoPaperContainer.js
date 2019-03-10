import React, { Component, Fragment } from 'react'

// import from Redux
import { connect } from 'react-redux'
// combine multi HOC
import { compose } from 'recompose'

import TransCoPaper from '../../../../components/MainPage/VerifyContent/Body/TransCoPaper'

class TransCoPaperContainer extends Component {
  render() {
    const { transCoOnSelect } = this.props
    
    const certificateExpDateList = [
      ['Chứng nhận đăng kí xe', transCoOnSelect.vehicleRegCertExpdate],
      ['Giấy phép vận chuyển hóa chất', transCoOnSelect.chemicalTransLicExpdate],
      ['Bảo hiểm xe', transCoOnSelect.assuranceExpdate],
      ['Đăng kiểm xe', transCoOnSelect.vehicleInspectationCertExpdate]
    ]
    return (
      <div>
        <TransCoPaper transCoOnSelect={transCoOnSelect}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { transCoOnSelect } = state.rfid
  return {
    transCoOnSelect
  }
}
export default connect(mapStateToProps, null)(TransCoPaperContainer)