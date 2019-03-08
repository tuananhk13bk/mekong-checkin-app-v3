import React from 'react'
import { render } from 'react-dom'
// Redux element
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// Import root reducer
import rootReducer from './reducers'
// Components
import App from './components/App'
// Create store
const store = createStore(rootReducer)
// Create theme
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import css
// import './index.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
      light: '#2196f3'
    },
    secondary: {
      main: '#ffc107',
      light: '#ffc107'
    },
    danger: {
      main: '#d9534f',
      light: '#d9534f'
    },
    warning: {
      main: '#f0ad4e',
      light: '#f0ad4e'
    },
    success: {
      main: '#5cb85c',
      light: '#5cb85c'
    },
    type: 'light'
  },
  typography: {
    useNextVariants: true,
  },
})

render(
    <Provider store={store} >
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  , document.getElementById('root')
)



