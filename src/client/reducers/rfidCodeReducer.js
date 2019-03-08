import {
  SUBMIT_RFID_TAG_NUM,
  CLEAR_ALL_STATE,
  SUBMIT_CHECKIN
} from '../actions/actionType'
// import my ultility
import DataProcess from '../utils/DataProcess'

const initState = {
  dialogIsOpen: false,
  rfidTagNumOnSearch: '',
  rfidTagNumIsFound: false,
  authenticatedRfidList: [],
  // orderOnSelect: {},
  orderOnSelect: {
    workOrderCode: '',
    rfidSysNum: '',
    cusFullName: '',
    productFullName: '',
    amount: '',
    unit: '',
    productType: '',
    status: '',
    driverFullName: '',
    driverIdNum: '',
    driverIdExpdate: '',
    driverLicNum: '',
    driverLicExpdate: '',
    fireFightingCertNum: '',
    fireFightingExpdate: '',
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

const rfidCodeReducer = (state=initState, action) => {
  switch (action.type) {
    case SUBMIT_RFID_TAG_NUM:
      return {
        ...state,
        orderOnSelect: DataProcess.mergeTwoObject(
          state.orderOnSelect,
          action.order
        ),
      }
    
    case CLEAR_ALL_STATE:
      return DataProcess.mergeTwoObject(state, initState)

    case SUBMIT_CHECKIN:
      return {
        ...state,
        dialogIsOpen: true
      }
    default:
      return state
  }
}

export default rfidCodeReducer