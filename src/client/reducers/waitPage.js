import {
  CHANGE_ERROR_MESSAGE,
  GET_VALID_RFID_TAG_NUM,
  GET_ALL_VALID_ORDER,
  CHANGE_RFID_TAG_NUM_TEXT_FIELD,
  CLEAR_ALL_STATE
  // SUBMIT_RFID_TAG_NUM
} from '../actions/actionType'
import DataProcess from '../utils/DataProcess'

const initState = {
  rfidTagNumOnSearch: '',
  textFieldIsError: false,
  errorMessage: '',
  validRfidTagNumList: [],
  validOrder: [],
  orderOnSelect: {}
}

const waitPage = (state=initState, action) => {
  switch (action.type) {
    case CHANGE_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.error,
        textFieldIsError: action.isError
      }
    case GET_VALID_RFID_TAG_NUM:
      return {
        ...state,
        validRfidTagNumList: action.value
      }
    case GET_ALL_VALID_ORDER:
      return {
        ...state,
        validOrder: action.list
      }
    case CHANGE_RFID_TAG_NUM_TEXT_FIELD:
      return {
        ...state,
        rfidTagNumOnSearch: action.value,
      }
    case CLEAR_ALL_STATE:
      return DataProcess.mergeTwoObject(state, initState)
    default:
      return state
  }
}

export default waitPage