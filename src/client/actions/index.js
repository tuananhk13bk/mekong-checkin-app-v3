import {
  SUBMIT_RFID_CODE,
  CHANGE_RFID_CODE_IN_TEXT_FIELD,
  TOGGLE_DIALOG,
  CHANGE_ERROR_MESSAGE,
  CLEAR_ALL_STATE,
} from './actionTypes'

export const submitRfidCode = (order) => {
  const {
    statusId,
    workOrderCode,
    rfidCode,
    rfidTagNum,
    rfidSysNum,

    cusFullName,
    productFullName,
    amount,
    unit,
    productType,
    status,

    driverFullName,
    driverIdNum,
    driverIdExpdate,
    driverLicNum,
    driverLicExpdate,
    fireFightingCertNum,
    fireFightingExpdate,

    transCoFullName,
    plateNum,
    ownerFullName,
    vehicleRegCertNum,
    vehicleRegCertExpdate,
    chemicalTransLicNum,
    chemicalTransLicExpdate,
    assuranceExpdate,
    vehicleInspectationCertExpdate
  } = order
  return {
    type: SUBMIT_RFID_CODE,
    headerOnSelect: {
      statusId,
      driverFullName,
      workOrderCode,
      rfidCode,
      rfidTagNum,
      rfidSysNum
    },
    customerOnSelect: {
      cusFullName,
      productFullName,
      amount,
      unit,
      productType,
      status,
    },
    driverOnSelect: {
      driverFullName,
      driverIdNum,
      driverIdExpdate,
      driverLicNum,
      driverLicExpdate,
      fireFightingCertNum,
      fireFightingExpdate,
    },
    transCoOnSelect: {
      transCoFullName,
      plateNum,
      ownerFullName,
      vehicleRegCertNum,
      vehicleRegCertExpdate,
      chemicalTransLicNum,
      chemicalTransLicExpdate,
      assuranceExpdate,
      vehicleInspectationCertExpdate
    }
  }
}

export const changeRfidCodeInTextField = (value) => {
  return {
    type: CHANGE_RFID_CODE_IN_TEXT_FIELD,
    value
  }
}

export const toggleDialog = () => {
  return {
    type: TOGGLE_DIALOG
  }
}

export const changeErrorMessage = (error, isError) => {
  return {
    type: CHANGE_ERROR_MESSAGE,
    error,
    isError
  }
}

export const clearAllState = () => {
  return {
    type: CLEAR_ALL_STATE
  }
}

export const submitCheckin = () => {
  return {
    type: SUBMIT_CHECKIN
  }
}
