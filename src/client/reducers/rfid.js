import {
  SUBMIT_RFID_CODE,
  CLEAR_ALL_STATE,
} from '../actions/actionTypes'
// import my ultility
import DataProcess from '../utils/DataProcess'

const initState = {
  dialogIsOpen: false,
  rfidTagNumOnSearch: '',
  rfidTagNumIsFound: false,
  authenticatedRfidList: [],
  headerOnSelect: {
    statusId: '',
    driverFullName: '',
    workOrderCode: '',
    rfidCode: '',
    rfidTagNum: '',
    rfidSysNum: ''
  },
  customerOnSelect: {
    cusFullName: '',
    productFullName: '',
    amount: '',
    unit: '',
    productType: '',
    status: '',
  },
  driverOnSelect: {
    driverFullName: '',
    driverIdNum: '',
    driverIdExpdate: '',
    driverLicNum: '',
    driverLicExpdate: '',
    fireFightingCertNum: '',
    fireFightingExpdate: '',
  },
  transCoOnSelect: {
    transCoFullName: '',
    plateNum: '',
    ownerFullName: '',
    vehicleRegCertNum: '',
    vehicleRegCertExpdate: '',
    chemicalTransLicNum: '',
    chemicalTransLicExpdate: '',
    assuranceExpdate: '',
    vehicleInspectationCertExpdate: ''
  }
}

const rfid = (state=initState, action) => {
  switch (action.type) {
    case SUBMIT_RFID_CODE:
      const { headerOnSelect, customerOnSelect, driverOnSelect, transCoOnSelect } = action
      return {
        ...state,
        headerOnSelect,
        customerOnSelect,
        driverOnSelect,
        transCoOnSelect
      }
    
    case CLEAR_ALL_STATE:
      return DataProcess.mergeTwoObject(state, initState)

    default:
      return state
  }
}

export default rfid