// Import child reducers
import rfidCodeReducer from './rfidCodeReducer'
import dialog from './dialog'
import orderPaper from './orderPaper'
import waitPage from './waitPage'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  rfidCodeReducer,
  dialog,
  orderPaper,
  waitPage
})

export default rootReducer