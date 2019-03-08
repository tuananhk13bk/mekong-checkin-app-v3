import {
  TOGGLE_DIALOG,
  CLEAR_ALL_STATE
} from '../actions/actionType'
import DataProcess from '../utils/DataProcess'

const initState = {
  dialogIsOpen: false
}

const dialog = (state=initState, action) => {
  switch (action.type) {
    case TOGGLE_DIALOG:
      return {
        ...state,
        dialogIsOpen: !state.dialogIsOpen
      }
    case CLEAR_ALL_STATE:
      return DataProcess.mergeTwoObject(state, initState)
    default:
      return state
  }
}

export default dialog