import {
  CHANGE_ERROR_MESSAGE,
  CHANGE_RFID_CODE_IN_TEXT_FIELD,
  CLEAR_ALL_STATE,
} from '../actions/actionTypes'
import DataProcess from '../utils/DataProcess'

const initState = {
  rfidCodeOnSearch: '',
  textFieldIsError: false,
  errorMessage: '',
}

const waitPage = (state=initState, action) => {
  switch (action.type) {
    case CHANGE_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.error,
        textFieldIsError: action.isError
      }
    case CHANGE_RFID_CODE_IN_TEXT_FIELD:
      return {
        ...state,
        rfidCodeOnSearch: action.value,
      }
    case CLEAR_ALL_STATE:
      return DataProcess.mergeTwoObject(state, initState)
    default:
      return state
  }
}

export default waitPage