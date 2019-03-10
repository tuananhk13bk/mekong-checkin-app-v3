// Import child reducers
import rfid from './rfid'
import dialog from './dialog'
import waitPage from './waitPage'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  rfid,
  dialog,
  waitPage
})

export default rootReducer