import {
  SUBMIT_RFID_TAG_NUM,
  CHANGE_RFID_TAG_NUM_TEXT_FIELD,
  TOGGLE_DIALOG,
  CHANGE_ERROR_MESSAGE,
  CLEAR_ALL_STATE,
  SUBMIT_CHECKIN
} from './actionType'

export const submitRfidTagNum = (order) => {
  return {
    type: SUBMIT_RFID_TAG_NUM,
    order
  }
}

export const changeRfidTagNumTextField = (value) => {
  return {
    type: CHANGE_RFID_TAG_NUM_TEXT_FIELD,
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

